export const questions = [
    // The Silent Anchor (A)
    {
        id: 1,
        text: "Do you feel uncomfortable when you are not being productive or helping someone?",
        options: [
            { value: 'A', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 2,
        text: "Do you often suppress your own needs to keep peace in your home or relationships?",
        options: [
            { value: 'A', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 3,
        text: "Do you feel guilty when you take time for yourself?",
        options: [
            { value: 'A', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 4,
        text: "Are you typically the emotional regulator in your family or friendships?",
        options: [
            { value: 'A', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 5,
        text: "Do you equate being strong with never asking for support?",
        options: [
            { value: 'A', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },

    // The Pattern Breaker (B)
    {
        id: 6,
        text: "Have you stayed in relationships longer than you should have because you saw someone’s potential?",
        options: [
            { value: 'B', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 7,
        text: "Do you tend to over-explain or defend your feelings in conflict?",
        options: [
            { value: 'B', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 8,
        text: "Have you confused emotional intensity with deep connection?",
        options: [
            { value: 'B', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 9,
        text: "Do you second-guess your perception after setting boundaries?",
        options: [
            { value: 'B', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 10,
        text: "Are you learning to choose stability over chaos in relationships?",
        options: [
            { value: 'B', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },

    // The Quiet Awakener (C)
    {
        id: 11,
        text: "Do you feel a quiet dissatisfaction even though your life looks stable on the outside?",
        options: [
            { value: 'C', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 12,
        text: "Have you recently questioned roles you’ve carried for decades?",
        options: [
            { value: 'C', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 13,
        text: "Do you struggle to answer what you truly want in this chapter of life?",
        options: [
            { value: 'C', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 14,
        text: "Are you craving alignment more than approval?",
        options: [
            { value: 'C', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    },
    {
        id: 15,
        text: "Do you feel called to rediscover passions you once put aside?",
        options: [
            { value: 'C', text: "Yes" },
            { value: 'N', text: "No" }
        ]
    }
];

export const resultsData: Record<string, { title: string; subtitle?: string; corePattern: string[]; whatsHappening: string[]; hiddenCost: string[]; rebirth: string[] }> = {
    'A': {
        title: "The Silent Anchor",
        subtitle: "(Chronic Over-Giver Pattern)",
        corePattern: [
            "You are the one everyone leans on.",
            "The stabilizer.",
            "The dependable one.",
            "You don’t fall apart.",
            "You hold everything together.",
            "And you’re exhausted."
        ],
        whatsHappening: [
            "You learned early that: Being useful = being safe, Being needed = being valued, Being strong = being loved.",
            "Your nervous system is wired for responsibility.",
            "Rest feels foreign.",
            "Slowing down triggers guilt.",
            "You don’t ask for much.",
            "But internally, you’re running on fumes."
        ],
        hiddenCost: [
            "You’ve built a life where: Everyone else gets regulated, You stay composed, Your needs stay quiet.",
            "You’re not breaking down.",
            "You’re tightening up."
        ],
        rebirth: [
            "Learning that support does not equal weakness",
            "Releasing roles that were never yours to carry",
            "Letting your home and schedule serve you",
            "Your next step isn’t collapse.",
            "It’s recalibration."
        ]
    },
    'B': {
        title: "The Pattern Breaker",
        subtitle: "(Healing from Toxic / Draining Relationships)",
        corePattern: [
            "You’ve loved hard.",
            "You’ve endured.",
            "You’ve rationalized red flags because you believed in potential.",
            "You don’t run from pain.",
            "You try to heal it."
        ],
        whatsHappening: [
            "You were conditioned to: Earn love through tolerance, Over-function in relationships, Confuse chemistry with compatibility.",
            "You’ve attracted intensity more than stability.",
            "And now? You’re tired of emotional chaos disguised as connection."
        ],
        hiddenCost: [
            "Even after leaving toxic dynamics, part of you still asks: “Was it really that bad?” “Maybe I expected too much.”",
            "You don’t trust your perception fully — yet."
        ],
        rebirth: [
            "Rebuilding trust in your own discernment",
            "Choosing calm over chemistry",
            "Ending the cycle of self-abandonment",
            "You are not too much.",
            "You were just under-protected."
        ]
    },
    'C': {
        title: "The Quiet Awakener",
        subtitle: "(Rediscovering Passion & Identity)",
        corePattern: [
            "Your life looks stable from the outside.",
            "But inside? There’s a low-grade dissatisfaction you can’t ignore anymore.",
            "You’ve done what was expected.",
            "You’ve fulfilled roles.",
            "You’ve kept things running.",
            "Now you’re asking: “Is this it?”"
        ],
        whatsHappening: [
            "You’ve outgrown a version of yourself.",
            "Not dramatically.",
            "Not impulsively.",
            "Just truthfully.",
            "You don’t need escape.",
            "You need alignment."
        ],
        hiddenCost: [
            "You struggle to answer: “What do I want now?”",
            "Because for decades, the question was: “What do they need?”"
        ],
        rebirth: [
            "Reclaiming dormant desires",
            "Making decisions from identity, not obligation",
            "Designing a chapter that reflects who you are now",
            "You’re not lost.",
            "You’re emerging."
        ]
    }
};