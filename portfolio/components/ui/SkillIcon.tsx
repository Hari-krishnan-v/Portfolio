"use client";

import {
    SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus,
    SiReact, SiRedux, SiTailwindcss, SiBootstrap, SiElectron,
    SiNodedotjs, SiExpress, SiDjango, SiFastapi, SiFlask,
    SiMongodb, SiPostgresql, SiMysql,
    SiApachekafka, SiRedis, SiDocker, SiGit, SiFirebase, SiPostman, SiNx, SiPrisma,
    SiJsonwebtokens, SiAuth0
} from "react-icons/si";
import { FaNetworkWired, FaGlobe, FaSitemap, FaBolt } from "react-icons/fa6";
import { IconType } from "react-icons";

interface SkillIconProps {
    name: string;
    className?: string; // Allow passing className for additional styling
}

interface SkillData {
    Icon: IconType;
    color: string;
}

const skillMap: Record<string, SkillData> = {
    "JavaScript": { Icon: SiJavascript, color: "#F7DF1E" },
    "TypeScript": { Icon: SiTypescript, color: "#3178C6" },
    "Python": { Icon: SiPython, color: "#3776AB" },
    "C": { Icon: SiC, color: "#A8B9CC" },
    "C++": { Icon: SiCplusplus, color: "#00599C" },

    "React.js": { Icon: SiReact, color: "#61DAFB" },
    "React Native": { Icon: SiReact, color: "#61DAFB" },
    "Redux": { Icon: SiRedux, color: "#764ABC" },
    "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
    "Bootstrap": { Icon: SiBootstrap, color: "#7952B3" },
    "Electron.js": { Icon: SiElectron, color: "#47848F" },

    "Node.js": { Icon: SiNodedotjs, color: "#339933" },
    "Express.js": { Icon: SiExpress, color: "#FFFFFF" }, // Using white for better visibility on dark bg
    "Django": { Icon: SiDjango, color: "#092E20" },
    "DRF": { Icon: SiDjango, color: "#A30000" }, // Custom red to distinguish
    "FastAPI": { Icon: SiFastapi, color: "#009688" },
    "Flask": { Icon: SiFlask, color: "#FFFFFF" }, // Using white for better visibility

    "MongoDB": { Icon: SiMongodb, color: "#47A248" },
    "PostgreSQL": { Icon: SiPostgresql, color: "#4169E1" },
    "MySQL": { Icon: SiMysql, color: "#4479A1" },

    "Microservices": { Icon: FaNetworkWired, color: "#FF5722" },
    "REST API": { Icon: FaGlobe, color: "#4CAF50" },
    "MVC": { Icon: FaSitemap, color: "#2196F3" },
    "Event-driven architecture": { Icon: FaBolt, color: "#FFC107" },

    "Kafka": { Icon: SiApachekafka, color: "#FFFFFF" }, // White for dark bg
    "Redis": { Icon: SiRedis, color: "#DC382D" },
    "Docker": { Icon: SiDocker, color: "#2496ED" },
    "Docker (basic)": { Icon: SiDocker, color: "#2496ED" },
    "Git": { Icon: SiGit, color: "#F05032" },
    "Firebase": { Icon: SiFirebase, color: "#FFCA28" },
    "Postman": { Icon: SiPostman, color: "#FF6C37" },
    "Nx Monorepo": { Icon: SiNx, color: "#FFFFFF" }, // White for visibility
    "Prisma ORM": { Icon: SiPrisma, color: "#FFFFFF" }, // White for visibility

    "JWT": { Icon: SiJsonwebtokens, color: "#FFFFFF" }, // White for visibility
    "OAuth (basic)": { Icon: SiAuth0, color: "#EB5424" }
};

export function SkillIcon({ name, className = "" }: SkillIconProps) {
    const skill = skillMap[name];

    if (!skill) {
        return null; // Or return a default generic icon
    }

    const { Icon, color } = skill;

    return (
        <div className={`p-1 bg-white/5 rounded-md ${className}`} title={name}>
            <Icon style={{ color }} className="w-5 h-5" />
        </div>
    );
}
