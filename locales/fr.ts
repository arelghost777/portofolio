export default {
    Navbar: {
        about: "À Propos",
        projects: "Projets",
        contact: "Contact"
    },
    Hero: {
        badge: "Disponible pour de nouveaux projets",
        titleLine1: "Créer des",
        titleHighlight: "modernes",
        titleLine2: "expériences web.",
        subtitle: "Arel — Développeur Frontend",
        cta: "Voir les projets",
        scroll: "Scroll"
    },
    About: {
        sectionLabel: "À Propos",

        titleBefore: "Développeur Frontend passionné par la",
        titleHighlight1: "performance",
        titleMiddle: "et le",
        titleHighlight2: "design",

        paragraph1:
        "Je construis et gère l'aspect visuel des sites et applications web, en veillant à ce que chaque interface soit à la fois esthétique et intuitive. Mon objectif est de transformer des idées complexes en expériences numériques fluides.",

        paragraph2:
        "Je suis toujours à la recherche de nouvelles opportunités pour collaborer, apprendre et évoluer. Si vous avez un projet qui correspond à mon profil, discutons-en.",

        contactCta: "Me contacter",

        skillsTitle: "Expertise Technique"
    },
    contact: {
        title: "Contact",
        header: {
        line1: "Un projet en tête ?",
        line2: "Parlons-en ensemble."
        },
        coordinates: "Mes coordonnées",
        location: {
        label: "Basé au Bénin",
        availability: "Disponible en freelance & CDI"
        },
        form: {
        name: {
            label: "Nom complet",
            placeholder: "John Doe",
            error: "Requis",
            minLength: "Minimum 2 caractères"
        },
        email: {
            label: "Email",
            placeholder: "votre@email.com",
            error: "Requis",
            pattern: "Email invalide"
        },
        message: {
            label: "Message",
            placeholder: "Parlez-moi de votre projet...",
            error: "Requis"
        },
        submit: {
            sending: "Envoi en cours",
            send: "Envoyer le message"
        }
        },
        alerts: {
        success: "Message envoyé avec succès !",
        error: "Une erreur est survenue"
        }
    },
    projects: {
        title: "Sélection de Travaux",
        header: {
        line1: "Des solutions numériques conçues avec",
        clarity: "clarté",
        and: "et",
        precision: "précision"
        },
        caseStudy: "Voir l'étude de cas",
        items: {
            1: {
                title: "GHOTIK",
                description: "Expérience d'achat minimaliste pour consoles de jeux.",
                overview: "GHOTIK est une landing page e-commerce que j'ai développée pour mettre en avant mes compétences en développement Frontend. L'objectif était de créer une présence en ligne percutante avec une expérience utilisateur optimale sur tous les appareils. Je me suis inspiré de divers sites du même secteur et j'ai utilisé des bibliothèques UI pour construire une interface utilisateur de qualité. N'hésitez pas à découvrir le projet en visitant le lien live."
            },
            2: {
                title: "NFT World",
                description: "Intégration pixel-perfect d'une maquette haute fidélité.",
                overview: "NFT World est une landing page pour un projet NFT fictif. Je l'ai construite avec Next.js et Tailwind CSS, en me concentrant sur la création d'un design visuellement attrayant et responsive. Ce projet démontre ma capacité à transformer une maquette haute fidélité en une page web fonctionnelle tout en assurant des performances optimales et une excellente expérience utilisateur. Explorez la version live pour voir les détails et animations en action."
            }
        }
    },
    project: {
        backToProjects: "Retour aux projets",
        techStack: "Stack Technique",
        directLinks: "Liens Directs",
        liveDemo: "Live Demo",
        sourceCode: "Source Code",
        projectDescription: "Description du projet",
    },
    footer: {
        signature: "Arel Tohoubi",
        bio: "Développeur Frontend spécialisé dans la création d'interfaces épurées et d'expériences numériques mémorables.",
        location: {
            title: "Localisation",
            country: "Bénin, Afrique de l'ouest",
            time: "Heure locale"
        },
        social: {
            title: "Réseaux"
        },
        bottom: {
            copyright: "© {year} — Handcrafted by Arel",
            backToTop: "Retour en haut"
        }
    }
} as const