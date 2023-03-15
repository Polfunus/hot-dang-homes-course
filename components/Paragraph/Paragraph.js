import React from "react";
import { getTextAlign, getTextColor } from "utils/fonts";

import { relativeToAbsoluteUrls } from "utils/realtiveToAbsoluteUrls";

export const Paragraph = ({ content, textAlign, color }) => {

    const pTag = React.createElement('p', {
        dangerouslySetInnerHTML: { __html: relativeToAbsoluteUrls(content) },
        className: `font-body max-w-5xl mx-auto my-5 ${getTextAlign(textAlign)}`,
        style: { color: getTextColor(color) }
    });

    return pTag;
};