import Link from "next/link";
import React from "react";

const SocialIcon = ({ href, children, ...restprops }) => {
  return (
    <Link href={href} {...restprops}>
      {children}
    </Link>
  );
};

export default SocialIcon;
