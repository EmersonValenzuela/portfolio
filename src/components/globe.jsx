import IconCloud from "./ui/icon-cloud";

const slugs = [
  "javascript",
  "php",
  "mysql",
  "react",
  "sass",
  "laravel",
  "html5",
  "css",
  "vuedotjs",
  "codeigniter",
  "firebase",
  "tailwindcss",
  "vite",
  "firebase",
  "nginx",
  "vercel",
  "cpanel",
  "paypal",
  "postman",
  "git",
  "notion",
  "github",
  "gitlab",
  "jquery",
  "wordpress",
  "bootstrap",
  "figma",
  "vuetify",
  "clickup",
  "visa"
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
