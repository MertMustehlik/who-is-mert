import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true, // true olur ise projeyi hafızaya alıp hızlı açılmasını sağlar
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);