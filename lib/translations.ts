export type Language = "fr" | "en"

export type TranslationKey =
  // Navigation
  | "nav.home"
  | "nav.about"
  | "nav.services"
  | "nav.contact"

  // Hero
  | "hero.title"
  | "hero.subtitle"
  | "hero.tagline"

  // About section
  | "about.title"
  | "about.subtitle"
  | "about.description1"
  | "about.description2"
  | "about.description3"
  | "about.stats.experience"
  | "about.stats.villas"
  | "about.stats.satisfaction"
  | "about.stats.service"

  // Services section
  | "services.title"
  | "services.administrative.title"
  | "services.administrative.description"
  | "services.administrative.feature1"
  | "services.administrative.feature2"
  | "services.administrative.feature3"
  | "services.technical.title"
  | "services.technical.description"
  | "services.technical.feature1"
  | "services.technical.feature2"
  | "services.technical.feature3"
  | "services.seasonal.title"
  | "services.seasonal.description"
  | "services.seasonal.feature1"
  | "services.seasonal.feature2"
  | "services.seasonal.feature3"
  | "services.valorization.title"
  | "services.valorization.description"
  | "services.valorization.feature1"
  | "services.valorization.feature2"
  | "services.valorization.feature3"

  // CTA section
  | "cta.title"
  | "cta.description"
  | "cta.button1"
  | "cta.button2"

  // Footer
  | "footer.description"
  | "footer.navigation"
  | "footer.services"
  | "footer.contact"
  | "footer.phone"
  | "footer.email"
  | "footer.address"
  | "footer.copyright"

  // About page
  | "aboutPage.hero.title"
  | "aboutPage.content.history.title"
  | "aboutPage.content.history.p1"
  | "aboutPage.content.history.p2"
  | "aboutPage.content.history.p3"
  | "aboutPage.content.philosophy.title"
  | "aboutPage.content.philosophy.p1"
  | "aboutPage.content.philosophy.p2"
  | "aboutPage.content.philosophy.p3"
  | "aboutPage.team.title"
  | "aboutPage.team.member1.name"
  | "aboutPage.team.member1.role"
  | "aboutPage.team.member1.bio"
  | "aboutPage.team.member2.name"
  | "aboutPage.team.member2.role"
  | "aboutPage.team.member2.bio"
  | "aboutPage.team.member3.name"
  | "aboutPage.team.member3.role"
  | "aboutPage.team.member3.bio"
  | "aboutPage.team.member4.name"
  | "aboutPage.team.member4.role"
  | "aboutPage.team.member4.bio"

  // Services page
  | "servicesPage.hero.title"
  | "servicesPage.administrative.title"
  | "servicesPage.administrative.description"
  | "servicesPage.administrative.features"
  | "servicesPage.technical.title"
  | "servicesPage.technical.description"
  | "servicesPage.technical.features"
  | "servicesPage.seasonal.title"
  | "servicesPage.seasonal.description"
  | "servicesPage.seasonal.features"
  | "servicesPage.valorization.title"
  | "servicesPage.valorization.description"
  | "servicesPage.valorization.features"

  // Contact page
  | "contactPage.hero.title"
  | "contactPage.content.title"
  | "contactPage.content.description"
  | "contactPage.content.info.phone.title"
  | "contactPage.content.info.phone.details"
  | "contactPage.content.info.email.title"
  | "contactPage.content.info.email.details"
  | "contactPage.content.info.address.title"
  | "contactPage.content.info.address.details"
  | "contactPage.content.info.hours.title"
  | "contactPage.content.info.hours.details"
  | "contactPage.content.whatsapp"
  | "contactPage.content.whatsapp.description"
  | "contactPage.form.name"
  | "contactPage.form.name.placeholder"
  | "contactPage.form.email"
  | "contactPage.form.email.placeholder"
  | "contactPage.form.phone"
  | "contactPage.form.phone.placeholder"
  | "contactPage.form.subject"
  | "contactPage.form.subject.placeholder"
  | "contactPage.form.subject.options.select"
  | "contactPage.form.subject.options.administrative"
  | "contactPage.form.subject.options.technical"
  | "contactPage.form.subject.options.seasonal"
  | "contactPage.form.subject.options.valorization"
  | "contactPage.form.subject.options.other"
  | "contactPage.form.message"
  | "contactPage.form.message.placeholder"
  | "contactPage.form.submit"
  | "contactPage.form.submitting"
  | "contactPage.form.success.title"
  | "contactPage.form.success.message"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  fr: {
    // Navigation
    "nav.home": "ACCUEIL",
    "nav.about": "À PROPOS",
    "nav.services": "SERVICES",
    "nav.contact": "CONTACT",

    // Hero
    "hero.title": "CONCIERGERIE",
    "hero.subtitle": "by Valérie",
    "hero.tagline": "Services de conciergerie de luxe pour votre villa à Marrakech",

    // About section
    "about.title": "À PROPOS",
    "about.subtitle": "Votre Partenaire de Confiance pour la Gestion de Votre Villa",
    "about.description1":
      "Conciergerie by Valérie est née d'une passion pour l'excellence et d'un désir de fournir des services de conciergerie exceptionnels aux propriétaires de villas à Marrakech.",
    "about.description2":
      "Notre équipe dévouée s'occupe de tous les aspects de la gestion de votre propriété, vous permettant de profiter pleinement de votre villa sans les tracas administratifs et techniques.",
    "about.description3":
      "Que vous soyez un propriétaire résident ou que vous louiez votre villa pour des séjours de vacances, nous vous offrons des solutions sur mesure pour répondre à vos besoins spécifiques.",
    "about.stats.experience": "Années d'expérience",
    "about.stats.villas": "Villas gérées",
    "about.stats.satisfaction": "Satisfaction client",
    "about.stats.service": "Service disponible",

    // Services section
    "services.title": "NOS SERVICES",
    "services.administrative.title": "Intendance Administrative",
    "services.administrative.description":
      "Nous nous occupons des documents administratifs liés à la maison : factures des fournisseurs, salaires des employés, ainsi que les charges d'électricité, d'eau, de gaz, etc.",
    "services.administrative.feature1": "Gestion des factures et charges",
    "services.administrative.feature2": "Tenue d'un registre des dépenses",
    "services.administrative.feature3": "Gestion du budget de la maison",
    "services.technical.title": "Intendance Technique",
    "services.technical.description":
      "Nous assurons la supervision de l'entretien général de votre maison, avec deux visites mensuelles et des visites d'urgence en cas de suspicion de dysfonctionnement.",
    "services.technical.feature1": "Supervision de l'entretien général",
    "services.technical.feature2": "Gestion des imprévus et dysfonctionnements",
    "services.technical.feature3": "Vérification régulière des installations",
    "services.seasonal.title": "Locations Saisonnières",
    "services.seasonal.description":
      "Nous prenons en charge la gestion complète de vos locations saisonnières, de la création d'annonce à l'accueil de vos hôtes.",
    "services.seasonal.feature1": "Prise de photographies professionnelles",
    "services.seasonal.feature2": "Rédaction attrayante de votre annonce",
    "services.seasonal.feature3": "Services personnalisés 5 étoiles",
    "services.valorization.title": "Valorisation de Villa",
    "services.valorization.description":
      "Nous vous conseillons pour améliorer votre décoration afin de créer une atmosphère accueillante et valoriser votre propriété.",
    "services.valorization.feature1": "Conseils en décoration",
    "services.valorization.feature2": "Suggestions de styles variés",
    "services.valorization.feature3": "Création d'ambiances uniques",

    // CTA section
    "cta.title": "Pret à nous confier la gestion de votre villa?",
    "cta.description":
      "Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à valoriser et gérer votre propriété.",
    "cta.button1": "Nous Contacter",
    "cta.button2": "En Savoir Plus",

    // Footer
    "footer.description":
      "Des services de conciergerie de luxe pour votre villa à Marrakech. Nous prenons soin de votre propriété comme si c'était la nôtre, avec une attention particulière aux détails.",
    "footer.navigation": "Navigation",
    "footer.services": "Nos Services",
    "footer.contact": "Contact",
    "footer.phone": "Téléphone",
    "footer.email": "Email",
    "footer.address": "Adresse",
    "footer.copyright": "Tous droits réservés.",

    // About page
    "aboutPage.hero.title": "À PROPOS DE NOUS",
    "aboutPage.content.history.title": "Notre Histoire",
    "aboutPage.content.history.p1":
      "Conciergerie by Valérie est née d'une passion pour l'excellence et d'un désir de fournir des services de conciergerie exceptionnels aux propriétaires de villas à Marrakech. Fondée par Valérie, une professionnelle avec plus de 10 ans d'expérience dans l'hôtellerie de luxe et la gestion immobilière, notre entreprise s'est rapidement imposée comme un partenaire de confiance pour les propriétaires exigeants.",
    "aboutPage.content.history.p2":
      "Notre équipe dévouée s'occupe de tous les aspects de la gestion de votre propriété, vous permettant de profiter pleinement de votre villa sans les tracas administratifs et techniques. Nous comprenons que chaque propriété est unique, c'est pourquoi nous offrons des solutions personnalisées qui répondent parfaitement à vos besoins spécifiques.",
    "aboutPage.content.history.p3":
      "Que vous soyez un propriétaire résident ou que vous louiez votre villa pour des séjours de vacances, nous vous offrons des services sur mesure pour valoriser votre investissement et assurer une gestion sans faille de votre propriété.",
    "aboutPage.content.philosophy.title": "Notre Philosophie",
    "aboutPage.content.philosophy.p1":
      "Chez Conciergerie by Valérie, nous croyons que la gestion d'une propriété de luxe va bien au-delà de simples tâches administratives. Il s'agit de créer une expérience exceptionnelle, tant pour les propriétaires que pour leurs invités.",
    "aboutPage.content.philosophy.p2":
      "Notre approche se base sur trois piliers fondamentaux : l'excellence du service, l'attention aux détails et la communication transparente. Nous traitons chaque propriété comme si c'était la nôtre, avec le plus grand soin et le plus grand respect.",
    "aboutPage.content.philosophy.p3":
      "Notre objectif est de vous offrir une tranquillité d'esprit totale, en sachant que votre villa est entre de bonnes mains, gérée par des professionnels qui comprennent l'importance de maintenir et d'améliorer la valeur de votre investissement.",
    "aboutPage.team.title": "NOTRE ÉQUIPE",
    "aboutPage.team.member1.name": "Valérie Durand",
    "aboutPage.team.member1.role": "Fondatrice & Directrice",
    "aboutPage.team.member1.bio":
      "Avec plus de 10 ans d'expérience dans l'hôtellerie de luxe et la gestion immobilière, Valérie a fondé Conciergerie by Valérie pour offrir un service d'exception aux propriétaires de villas à Marrakech.",
    "aboutPage.team.member2.name": "Ahmed Benali",
    "aboutPage.team.member2.role": "Responsable Technique",
    "aboutPage.team.member2.bio":
      "Expert en maintenance et gestion technique, Ahmed supervise toutes les interventions et s'assure que chaque propriété est maintenue dans un état impeccable.",
    "aboutPage.team.member3.name": "Sophie Martin",
    "aboutPage.team.member3.role": "Responsable Locations Saisonnières",
    "aboutPage.team.member3.bio":
      "Spécialiste du marketing et de l'accueil, Sophie gère les locations saisonnières avec un souci constant de la satisfaction des clients et des propriétaires.",
    "aboutPage.team.member4.name": "Karim Tazi",
    "aboutPage.team.member4.role": "Designer d'Intérieur",
    "aboutPage.team.member4.bio":
      "Avec son œil artistique et sa connaissance approfondie des tendances, Karim transforme les espaces pour créer des ambiances uniques et valoriser chaque propriété.",

    // Services page
    "servicesPage.hero.title": "NOS SERVICES",
    "servicesPage.administrative.title": "Intendance Administrative",
    "servicesPage.administrative.description":
      "Nous nous occupons des documents administratifs liés à la maison : factures des fournisseurs, salaires des employés, ainsi que les charges d'électricité, d'eau, de gaz, etc.",
    "servicesPage.administrative.features": [
      "Gestion des factures et charges",
      "Tenue d'un registre des dépenses",
      "Gestion du budget de la maison",
      "Rapports réguliers aux propriétaires",
      "Gestion des contrats avec les prestataires (jardiniers, artisans, etc.)",
      "Optimisation des coûts tout en assurant la meilleure valeur sur le long terme",
      "Maintien de bonnes relations avec les prestataires (qualité, délais, contrats)",
    ],
    "servicesPage.technical.title": "Intendance Technique",
    "servicesPage.technical.description":
      "Nous assurons la supervision de l'entretien général de votre maison, avec deux visites mensuelles et des visites d'urgence en cas de suspicion de dysfonctionnement ou d'intempéries.",
    "servicesPage.technical.features": [
      "Supervision de l'entretien général avec deux visites mensuelles",
      "Visites d'urgence en cas de dysfonctionnement ou d'intempéries",
      "Prise en charge des imprévus et des dysfonctionnements de vos équipements et installations",
      "Vérification régulière du bon fonctionnement de toutes vos installations",
      "Organisation des interventions pour les réparations et les travaux nécessaires",
      "Information et suivi des maintenances et réparations effectuées",
      "Gestion des systèmes d'alarme, de la vidéosurveillance et de la sécurité",
    ],
    "servicesPage.seasonal.title": "Locations Saisonnières",
    "servicesPage.seasonal.description":
      "Nous prenons en charge la gestion complète de vos locations saisonnières, de la création d'annonce à l'accueil de vos hôtes.",
    "servicesPage.seasonal.features": [
      "Prise de photographies professionnelles",
      "Rédaction attrayante de votre annonce",
      "Suggestions d'hôtes pour vos locations de vacances",
      "Gestion de la communication entre vous et vos hôtes pendant leur séjour",
      "Services personnalisés 5 étoiles: réservations de restaurants, transports et activités locales",
      "Création d'une atmosphère chaleureuse dans votre villa avant votre arrivée ou celle de vos hôtes",
      "Fourniture d'un livret d'accueil pour vos hôtes avec informations sur le fonctionnement de la villa",
    ],
    "servicesPage.valorization.title": "Valorisation de Villa",
    "servicesPage.valorization.description":
      "Nous vous conseillons pour améliorer votre décoration afin de créer une atmosphère accueillante et valoriser votre propriété.",
    "servicesPage.valorization.features": [
      "Conseils pour améliorer votre décoration et créer une atmosphère accueillante",
      "Suggestions de styles variés : bohème chic, marocain contemporain, minimaliste, etc.",
      "Mobilier et agencement : sélection et conception sur mesure de meubles, placards, têtes de lit, etc.",
      "Installation de tous les éléments",
      "Décoration et agencement : luminaires, tableaux, tapis, linge de maison, rideaux, etc.",
      "Mobilier d'extérieur : éclairage, plantes, fontaines",
      "Création d'ambiances : espace lounge, coin repas en extérieur et zone de feu",
    ],

    // Contact page
    "contactPage.hero.title": "CONTACTEZ-NOUS",
    "contactPage.content.title": "Contactez-nous",
    "contactPage.content.description":
      "Nous sommes à votre disposition pour répondre à toutes vos questions concernant nos services de conciergerie. N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques.",
    "contactPage.content.info.phone.title": "Téléphone",
    "contactPage.content.info.phone.details": ["+33 6 60 96 70 70 (France)", "+212 6 63 26 44 34 (Maroc)"],
    "contactPage.content.info.email.title": "Email",
    "contactPage.content.info.email.details": ["contact@conciergerieinmarrakech.com"],
    "contactPage.content.info.address.title": "Adresse",
    "contactPage.content.info.address.details": ["Marrakech, Maroc"],
    "contactPage.content.info.hours.title": "Heures d'ouverture",
    "contactPage.content.info.hours.details": [
      "Lundi - Vendredi: 9h00 - 18h00",
      "Samedi: 10h00 - 15h00",
      "Service d'urgence: 24/7",
    ],
    "contactPage.content.whatsapp": "Pour une réponse rapide",
    "contactPage.content.whatsapp.description": "Contactez-nous sur WhatsApp",
    "contactPage.form.name": "Nom complet",
    "contactPage.form.name.placeholder": "Votre nom",
    "contactPage.form.email": "Email",
    "contactPage.form.email.placeholder": "votre@email.com",
    "contactPage.form.phone": "Téléphone",
    "contactPage.form.phone.placeholder": "+33 6 12 34 56 78",
    "contactPage.form.subject": "Sujet",
    "contactPage.form.subject.placeholder": "Sélectionnez un sujet",
    "contactPage.form.subject.options.select": "Sélectionnez un sujet",
    "contactPage.form.subject.options.administrative": "Intendance Administrative",
    "contactPage.form.subject.options.technical": "Intendance Technique",
    "contactPage.form.subject.options.seasonal": "Locations Saisonnières",
    "contactPage.form.subject.options.valorization": "Valorisation de Villa",
    "contactPage.form.subject.options.other": "Autre",
    "contactPage.form.message": "Message",
    "contactPage.form.message.placeholder": "Comment pouvons-nous vous aider?",
    "contactPage.form.submit": "Envoyer le message",
    "contactPage.form.submitting": "Envoi en cours...",
    "contactPage.form.success.title": "Message envoyé avec succès!",
    "contactPage.form.success.message":
      "Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.",
  },
  en: {
    // Navigation
    "nav.home": "HOME",
    "nav.about": "ABOUT",
    "nav.services": "SERVICES",
    "nav.contact": "CONTACT",

    // Hero
    "hero.title": "CONCIERGE SERVICE",
    "hero.subtitle": "by Valérie",
    "hero.tagline": "Luxury concierge services for your villa in Marrakech",

    // About section
    "about.title": "ABOUT",
    "about.subtitle": "Your Trusted Partner for Villa Management",
    "about.description1":
      "Conciergerie by Valérie was born from a passion for excellence and a desire to provide exceptional concierge services to villa owners in Marrakech.",
    "about.description2":
      "Our dedicated team takes care of all aspects of your property management, allowing you to fully enjoy your villa without administrative and technical hassles.",
    "about.description3":
      "Whether you are a resident owner or rent your villa for vacation stays, we offer tailored solutions to meet your specific needs.",
    "about.stats.experience": "Years of experience",
    "about.stats.villas": "Villas managed",
    "about.stats.satisfaction": "Client satisfaction",
    "about.stats.service": "Service available",

    // Services section
    "services.title": "OUR SERVICES",
    "services.administrative.title": "Administrative Management",
    "services.administrative.description":
      "We take care of administrative documents related to the house: supplier invoices, employee salaries, as well as electricity, water, gas charges, etc.",
    "services.administrative.feature1": "Management of bills and charges",
    "services.administrative.feature2": "Keeping an expense register",
    "services.administrative.feature3": "House budget management",
    "services.technical.title": "Technical Management",
    "services.technical.description":
      "We ensure the supervision of the general maintenance of your house, with two monthly visits and emergency visits in case of suspected malfunction.",
    "services.technical.feature1": "Supervision of general maintenance",
    "services.technical.feature2": "Management of contingencies and malfunctions",
    "services.technical.feature3": "Regular verification of installations",
    "services.seasonal.title": "Seasonal Rentals",
    "services.seasonal.description":
      "We take care of the complete management of your seasonal rentals, from creating listings to welcoming your guests.",
    "services.seasonal.feature1": "Professional photography",
    "services.seasonal.feature2": "Attractive listing writing",
    "services.seasonal.feature3": "5-star personalized services",
    "services.valorization.title": "Villa Enhancement",
    "services.valorization.description":
      "We advise you on improving your decoration to create a welcoming atmosphere and enhance your property.",
    "services.valorization.feature1": "Decoration advice",
    "services.valorization.feature2": "Suggestions for various styles",
    "services.valorization.feature3": "Creation of unique atmospheres",

    // CTA section
    "cta.title": "Ready to entrust us with the management of your villa?",
    "cta.description":
      "Contact us today to discuss your specific needs and discover how we can help you enhance and manage your property.",
    "cta.button1": "Contact Us",
    "cta.button2": "Learn More",

    // Footer
    "footer.description":
      "Luxury concierge services for your villa in Marrakech. We take care of your property as if it were our own, with special attention to detail.",
    "footer.navigation": "Navigation",
    "footer.services": "Our Services",
    "footer.contact": "Contact",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.address": "Address",
    "footer.copyright": "All rights reserved.",

    // About page
    "aboutPage.hero.title": "ABOUT US",
    "aboutPage.content.history.title": "Our History",
    "aboutPage.content.history.p1":
      "Conciergerie by Valérie was born from a passion for excellence and a desire to provide exceptional concierge services to villa owners in Marrakech. Founded by Valérie, a professional with over 10 years of experience in luxury hospitality and property management, our company has quickly established itself as a trusted partner for demanding owners.",
    "aboutPage.content.history.p2":
      "Our dedicated team takes care of all aspects of your property management, allowing you to fully enjoy your villa without administrative and technical hassles. We understand that each property is unique, which is why we offer personalized solutions that perfectly meet your specific needs.",
    "aboutPage.content.history.p3":
      "Whether you are a resident owner or rent your villa for vacation stays, we offer tailored services to enhance your investment and ensure seamless management of your property.",
    "aboutPage.content.philosophy.title": "Our Philosophy",
    "aboutPage.content.philosophy.p1":
      "At Conciergerie by Valérie, we believe that managing a luxury property goes far beyond simple administrative tasks. It's about creating an exceptional experience for both owners and their guests.",
    "aboutPage.content.philosophy.p2":
      "Our approach is based on three fundamental pillars: service excellence, attention to detail, and transparent communication. We treat each property as if it were our own, with the utmost care and respect.",
    "aboutPage.content.philosophy.p3":
      "Our goal is to provide you with complete peace of mind, knowing that your villa is in good hands, managed by professionals who understand the importance of maintaining and enhancing the value of your investment.",
    "aboutPage.team.title": "OUR TEAM",
    "aboutPage.team.member1.name": "Valérie Durand",
    "aboutPage.team.member1.role": "Founder & Director",
    "aboutPage.team.member1.bio":
      "With over 10 years of experience in luxury hospitality and property management, Valérie founded Conciergerie by Valérie to offer exceptional service to villa owners in Marrakech.",
    "aboutPage.team.member2.name": "Ahmed Benali",
    "aboutPage.team.member2.role": "Technical Manager",
    "aboutPage.team.member2.bio":
      "An expert in maintenance and technical management, Ahmed oversees all interventions and ensures that each property is maintained in impeccable condition.",
    "aboutPage.team.member3.name": "Sophie Martin",
    "aboutPage.team.member3.role": "Seasonal Rentals Manager",
    "aboutPage.team.member3.bio":
      "A specialist in marketing and hospitality, Sophie manages seasonal rentals with a constant focus on client and owner satisfaction.",
    "aboutPage.team.member4.name": "Karim Tazi",
    "aboutPage.team.member4.role": "Interior Designer",
    "aboutPage.team.member4.bio":
      "With his artistic eye and in-depth knowledge of trends, Karim transforms spaces to create unique atmospheres and enhance each property.",

    // Services page
    "servicesPage.hero.title": "OUR SERVICES",
    "servicesPage.administrative.title": "Administrative Management",
    "servicesPage.administrative.description":
      "We take care of administrative documents related to the house: supplier invoices, employee salaries, as well as electricity, water, gas charges, etc.",
    "servicesPage.administrative.features": [
      "Management of bills and charges",
      "Keeping an expense register",
      "House budget management",
      "Regular reports to owners",
      "Management of contracts with service providers (gardeners, craftsmen, etc.)",
      "Cost optimization while ensuring the best long-term value",
      "Maintaining good relationships with service providers (quality, deadlines, contracts)",
    ],
    "servicesPage.technical.title": "Technical Management",
    "servicesPage.technical.description":
      "We ensure the supervision of the general maintenance of your house, with two monthly visits and emergency visits in case of suspected malfunction or bad weather.",
    "servicesPage.technical.features": [
      "Supervision of general maintenance with two monthly visits",
      "Emergency visits in case of malfunction or bad weather",
      "Handling of contingencies and malfunctions of your equipment and installations",
      "Regular verification of the proper functioning of all your installations",
      "Organization of interventions for necessary repairs and work",
      "Information and follow-up of maintenance and repairs carried out",
      "Management of alarm systems, video surveillance, and security",
    ],
    "servicesPage.seasonal.title": "Seasonal Rentals",
    "servicesPage.seasonal.description":
      "We take care of the complete management of your seasonal rentals, from creating listings to welcoming your guests.",
    "servicesPage.seasonal.features": [
      "Professional photography",
      "Attractive listing writing",
      "Guest suggestions for your vacation rentals",
      "Management of communication between you and your guests during their stay",
      "5-star personalized services: restaurant reservations, transportation, and local activities",
      "Creation of a warm atmosphere in your villa before your arrival or that of your guests",
      "Provision of a welcome booklet for your guests with information on how the villa works",
    ],
    "servicesPage.valorization.title": "Villa Enhancement",
    "servicesPage.valorization.description":
      "We advise you on improving your decoration to create a welcoming atmosphere and enhance your property.",
    "servicesPage.valorization.features": [
      "Advice on improving your decoration and creating a welcoming atmosphere",
      "Suggestions for various styles: bohemian chic, contemporary Moroccan, minimalist, etc.",
      "Furniture and layout: selection and custom design of furniture, closets, headboards, etc.",
      "Installation of all elements",
      "Decoration and layout: lighting, paintings, rugs, linens, curtains, etc.",
      "Outdoor furniture: lighting, plants, fountains",
      "Creation of atmospheres: lounge space, outdoor dining area, and fire zone",
    ],

    // Contact page
    "contactPage.hero.title": "CONTACT US",
    "contactPage.content.title": "Contact Us",
    "contactPage.content.description":
      "We are at your disposal to answer all your questions about our concierge services. Do not hesitate to contact us to discuss your specific needs.",
    "contactPage.content.info.phone.title": "Phone",
    "contactPage.content.info.phone.details": ["+33 6 60 96 70 70 (France)", "+212 6 63 26 44 34 (Morocco)"],
    "contactPage.content.info.email.title": "Email",
    "contactPage.content.info.email.details": ["contact@conciergerieinmarrakech.com"],
    "contactPage.content.info.address.title": "Address",
    "contactPage.content.info.address.details": ["Marrakech, Morocco"],
    "contactPage.content.info.hours.title": "Opening Hours",
    "contactPage.content.info.hours.details": [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 3:00 PM",
      "Emergency service: 24/7",
    ],
    "contactPage.content.whatsapp": "For a quick response",
    "contactPage.content.whatsapp.description": "Contact us on WhatsApp",
    "contactPage.form.name": "Full name",
    "contactPage.form.name.placeholder": "Your name",
    "contactPage.form.email": "Email",
    "contactPage.form.email.placeholder": "your@email.com",
    "contactPage.form.phone": "Phone",
    "contactPage.form.phone.placeholder": "+33 6 12 34 56 78",
    "contactPage.form.subject": "Subject",
    "contactPage.form.subject.placeholder": "Select a subject",
    "contactPage.form.subject.options.select": "Select a subject",
    "contactPage.form.subject.options.administrative": "Administrative Management",
    "contactPage.form.subject.options.technical": "Technical Management",
    "contactPage.form.subject.options.seasonal": "Seasonal Rentals",
    "contactPage.form.subject.options.valorization": "Villa Enhancement",
    "contactPage.form.subject.options.other": "Other",
    "contactPage.form.message": "Message",
    "contactPage.form.message.placeholder": "How can we help you?",
    "contactPage.form.submit": "Send Message",
    "contactPage.form.submitting": "Sending...",
    "contactPage.form.success.title": "Message sent successfully!",
    "contactPage.form.success.message": "Thank you for contacting us. We will respond as soon as possible.",
  },
}
