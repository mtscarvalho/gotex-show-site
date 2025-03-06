import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { JSXConvertersFunction, RichText as RichTextWithoutBlocks } from "@payloadcms/richtext-lexical/react";

import { YouTubeEmbed, YouTubeEmbedProps } from "@/components/youtube-embed";

type RichTextProps = {
  data: SerializedEditorState;
};

export function RichText({ data }: RichTextProps) {
  type NodeTypes = DefaultNodeTypes | SerializedBlockNode<YouTubeEmbedProps>;

  const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    blocks: {
      youtubeEmbed: ({ node }: { node: SerializedBlockNode<YouTubeEmbedProps> }) => <YouTubeEmbed {...node.fields} />,
    },
  });

  return <RichTextWithoutBlocks converters={jsxConverters} data={data} />;
}
