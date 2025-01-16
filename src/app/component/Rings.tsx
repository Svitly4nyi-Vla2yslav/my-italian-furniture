"use client";

import styled from "styled-components";

// Тип для пропсів компонента Rings
interface RingsProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const RingsSpan = styled.span<RingsProps>`
  position: absolute;
  top: ${({ top }) => top || "auto"};
  right: ${({ right }) => right || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  pointer-events: none;
`;

export const Rings: React.FC<RingsProps> = ({ top, right, bottom, left }) => {
  return (
    <RingsSpan top={top} right={right} bottom={bottom} left={left}>
      <svg xmlns="http://www.w3.org/2000/svg" width="530" height="129">
        <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".45">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
    </RingsSpan>
  );
};
