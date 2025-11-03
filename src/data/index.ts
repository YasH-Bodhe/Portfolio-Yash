import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { TelegramIcon } from '@/components/icons/telegram'
import { GitHubActionsIcon } from '@/components/icons/tags/githubActions'
import { ZomatoIcon } from '@/components/icons/tags/zomato'
import { UberIcon } from '@/components/icons/tags/uber'
import { PrometheusIcon } from '@/components/icons/tags/prometheus'
import { AWSEKSIcon } from '@/components/icons/tags/awsEKS'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JenkinsIcon } from '@/components/icons/tags/jenkins'
import { KubernetesIcon } from '@/components/icons/tags/kubernetes'
import { DockerIcon } from '@/components/icons/tags/docker'
import { AzureIcon } from '@/components/icons/tags/azure'
import { AWSIcon } from '@/components/icons/tags/aws'
import { TerraformIcon } from '@/components/icons/tags/terraform'
import { AnsibleIcon } from '@/components/icons/tags/ansible'
import { AzureDevOpsIcon } from '@/components/icons/tags/azureDevOps'
import { DevOpsIcon } from '@/components/icons/tags/devops'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Y A S H',
  initials: 'YASH'
}

export const ABOUT = {
  title: `DevOps Engineer focused on automation, scalability, and cloud infrastructure. Based in Mumbai, India`,
  description: `I'm a DevOps Engineer passionate about automating systems and building scalable cloud infrastructures. I specialize in AWS, Azure, Terraform, Kubernetes, and Docker to streamline deployments and optimize workflows. I also create automation scripts, interview prep content, curated learning paths, and collaborative spaces for open-source and knowledge sharing.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/YasH-Bodhe',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yash-bodhe-devops/',
    icon: LinkedInIcon
  },
  {
    title: 'Telegram',
    url: 'https://t.me/YashBodhe',
    icon: TelegramIcon
  },
  {
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1HUyvvksyt-H-HD3cEnzKSaCep8LLzov-/view?usp=drive_link',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'Mailto:bodheyash@gmail.com',
    icon: MailIcon
  },
  {
    title: 'Other Links',
    url: 'https://portfolio-yash-azure.vercel.app/',
    icon: LinkIcon
  }
]

export const CAREER = [
  {
    company: 'Null Classes | Internship',
    link: 'https://www.linkedin.com/posts/yash-bodhe-devops_im-happy-to-share-that-im-starting-a-new-activity-7331566260851204097-FAl1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzPJzsBk9-fqFMqQS-rtcUtlGEsS0QpC8U',
    badges: ['Remote'],
    jobs: [
      {
        title: 'AWS Cloud Intern',
        start: 'May, 2025',
        end: 'Sept 2025',
        description: [
          'Published technical blogs on DevOps, cloud platforms, and industry best practices.',
          'Engaged with the tech community through informative and practical content.',
          'Focused on delivering value through real-world insights and tutorials.'
        ]
      }
    ]
  },
  {
    company: 'Forage',
    link: 'https://www.linkedin.com/posts/yash-bodhe-devops_aws-solutionsarchitect-cloudcomputing-activity-7314633228143755264-g4ZB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzPJzsBk9-fqFMqQS-rtcUtlGEsS0QpC8U',
    badges: ['Virtual'],
    jobs: [
      {
        title: 'AWS Solutions Aechitect',
        start: 'April, 2025',
        end: 'Present',
        description: [
          'Implemented IAM roles and policies to manage user access and ensure cloud security compliance.',
          'Collaborated with mentors to analyze system requirements and propose cost optimization and architecture improvement strategies.',
          'Gained hands-on experience in networking, fault tolerance, and disaster recovery strategies on AWS.'
        ]
      }
    ]
  },
  
];

const TAGS = {
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon
  },
  GITHUB_ACTIONS: {
    name: 'GitHub Actions',
    icon: GitHubActionsIcon
  },
  ZOMATO: {
    name: 'Zomato',
    icon: ZomatoIcon
  },
  UBER: {
    name: 'Uber',
    icon: UberIcon
  },
  PROMETHEUS: {
    name: 'Prometheus',
    icon: PrometheusIcon
  },
  AWS_EKS: {
    name: 'AWS EKS',
    icon: AWSEKSIcon
  },
  LINUX: {
    name: 'Linux',
    icon: LinuxIcon
  },
  JENKINS: {
    name: 'Jenkins',
    icon: JenkinsIcon
  },
  KUBERNETES: {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  DOCKER: {
    name: 'Docker',
    icon: DockerIcon
  },
  AZURE: {
    name: 'Azure',
    icon: AzureIcon
  },
  AWS: {
    name: 'AWS',
    icon: AWSIcon
  },
  TERRAFORM: {
    name: 'Terraform',
    icon: TerraformIcon
  },
  ANSIBLE: {
    name: 'Ansible',
    icon: AnsibleIcon
  },
  AZURE_DEVOPS: {
    name: 'Azure DevOps',
    icon: AzureDevOpsIcon
  },
  DEVOPS: {
    name: 'DevOps',
    icon: DevOpsIcon
  }
}

export const PROJECTS = [
  {
    title: ' ITSA Fest Management System',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.AZURE, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'A dedicated website featuring real-time DevOps & Cloud projects, from beginner to production-level. Perfect to learn by doing whether its CICD, Kubernetes, Terraform, or monitoring tools, it’s all here!',
    link: {
      github: 'https://github.com/YasH-Bodhe/ITSA-FMS',
      preview: 'https://projects.prodevopsguytech.com'
    },
  },
  {
    title: 'Portfolio Website',
    tags: [TAGS.GITHUB, TAGS.DEVOPS],
    description: 'All the major repositories you’ll ever need — from automation scripts to infra as code to interview prep — curated and organized to help you learn, implement, and grow as a DevOps professional.',
    link: {
      github: 'https://github.com/YasH-Bodhe/Portfolio-Yash',
      preview: 'https://portfolio-yash-azure.vercel.app/',
    },
  },
  
];
