import React, { useState } from 'react';
import Layout from '@theme-original/DocItem/Layout';
import PresentationPlayer from '@site/src/components/PresentationPlayer';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function LayoutWrapper(props) {
  const { metadata, contentTitle } = useDoc();
  const { frontMatter } = metadata;
  const [isPlaying, setIsPlaying] = useState(false);

  // If the document has `is_presentation: true` or layout === 'presentation'
  const isPresentation = frontMatter.is_presentation || frontMatter.layout === 'presentation';

  if (isPlaying && isPresentation) {
    return (
      <PresentationPlayer
        title={frontMatter.title || contentTitle}
        author={frontMatter.author}
        onClose={() => setIsPlaying(false)}
      >
        {props.children}
      </PresentationPlayer>
    );
  }

  return (
    <>
      {isPresentation && (
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsPlaying(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-[#060B13] bg-[#E5A823] hover:bg-[#C69214] border-none cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            🖥️ Open Slideshow
          </button>
        </div>
      )}
      <Layout {...props} />
    </>
  );
}
