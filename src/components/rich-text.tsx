import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";
import { SerializedEditorState } from "node_modules/lexical/LexicalEditorState";
import { JSXConvertersFunction, RichText as ConvertRichText } from "@payloadcms/richtext-lexical/react";

import { YouTubeEmbed, YouTubeEmbedProps } from "@/components/youtube-embed";
import { MediaBlock, MediaBlockProps } from "@/components/media-block";

type RichTextProps = {
  data: SerializedEditorState;
};

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<YouTubeEmbedProps>;

export function RichText({ data }: RichTextProps) {
  const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    blocks: {
      youtubeEmbed: ({ node }: { node: SerializedBlockNode<YouTubeEmbedProps> }) => <YouTubeEmbed {...node.fields} />,
      mediaBlock: ({ node }: { node: SerializedBlockNode<MediaBlockProps> }) => <MediaBlock {...node.fields} />,
    },
  });

  return <ConvertRichText converters={jsxConverters} data={data} />;
}
