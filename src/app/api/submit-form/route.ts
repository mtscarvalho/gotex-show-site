import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { captchaToken, name, email, company, phone, message } = await req.json();

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
  const captchaResponse = await fetch(verificationUrl, { method: "POST" });
  const captchaData = await captchaResponse.json();

  if (!captchaData.success) {
    return NextResponse.json({ error: "Captcha verification failed." }, { status: 400 });
  }

  try {
    const rdResponse = await fetch(`https://api.rd.services/platform/conversions?api_key=${process.env.RD_STATION_API_KEY}`, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        event_type: "CONVERSION",
        event_family: "CDP",
        payload: {
          conversion_identifier: "site",
          name: name,
          email: email,
          phone: phone,
          company_name: company,
          cf_mensagem: message,
          legal_bases: [{ category: "communications", type: "consent", status: "granted" }],
        },
      }),
    });

    if (!rdResponse.ok) {
      throw new Error("Failed to send data to RD Station.");
    }

    console.log("Form submitted successfully!");
    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending data to RD Station." }, { status: 500 });
  }
}
