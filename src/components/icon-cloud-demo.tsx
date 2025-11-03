"use client"

import { IconCloud } from "./ui/magicui/icon-cloud"

const slugs = [
  "docker",
  "kubernetes",
  "terraform",
  "ansible",
  "jenkins",
  "gitlab",
  "github",
  "git",
  "googlecloud", 
  "githubactions",
  "prometheus",
  "grafana",
  "python",
  "linux",
  "javascript",
  "typescript",
  "postgresql",
  "mongodb",
  "mysql",
  "visualstudiocode",
]

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  )
  
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  )
}