import data from './portfolio.json';

export type PortfolioData = typeof data;

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    role: string;
}

export interface Experience {
    company: string;
    role: string;
    employmentType: string;
    previousRole?: string;
    description: string[];
    companyUrl?: string;
    companyDescription?: string;
    companyLocation?: string;
}

export interface Education {
    degree: string;
    university: string;
    year: string;
    cgpa: string;
}

export interface Skills {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    architecture: string[];
    devopsAndTools: string[];
    authentication: string[];
}

export interface Project {
    name: string;
    tag?: string;
    banner?: string;
    status?: string;
    stack: string[];
    highlights: string[];
    link?: string;
    github?: string;
    description?: string;
    // Extended fields for Modal
    longDescription?: string;
    features?: string[];
    screenshots?: string[]; // URLs or paths
    challenges?: string[]; // Interesting technical hurdles
    developerThought?: string; // Personal note
    instructions?: string; // How to run/use
    attachments?: { name: string; url: string }[];
}

export interface VirtualInternship {
    company: string;
    role: string;
    year: string;
    highlights: string[];
}

export const portfolioData = data as PortfolioData;
