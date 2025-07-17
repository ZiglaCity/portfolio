const blogs = [
  {
    id: 1,
    title: "The Real Me",
    date: "July 15, 2025",
    image: "/assets/blogs/real-me.jpg",
    tags: ["Life", "Personal"],
    excerpt:
      "Who is Zigla beyond the code? Not everyone gets to find out—but if you're here, you're close.",
    content: `
    <p>I’m more than the commits, the PRs, or the clean UI.<br />
    Behind the screen, there’s a mind that rarely sleeps, and a soul wired a little differently.</p>

    <p>Some people know me as <strong>Solomon</strong> — calm, observant, the guy who listens more than he speaks.<br />
    Others know me as <strong>Zigla City</strong> — the late-night builder, the architect of chaos and clarity, the one turning caffeine and silence into something real.</p>

    <p>Truth is, I'm a contradiction.<br />
    I love clean systems, but I thrive in creative mess.<br />
    I chase perfection in code but live life in raw draft mode.<br />
    I’m the guy who will debug an API at 3AM, then go write a poem nobody will ever read.</p>

    <p>I’m not trying to be your average dev. I want to build tools that outlive me.<br />
    I want to create things that feel like they were pulled straight out of thought — pure, raw, unfiltered.<br />
    Sometimes, I disappear from the socials and vanish into work. That’s not by accident — I value depth over noise.</p>

    <p>This blog? It’s not a diary. It’s a digital trail.<br />
    For the curious. The few who ask: <em>“Yo, who’s really behind the keyboard?”</em></p>

    <p>So if you're here, maybe you get it.<br />
    Maybe you're not just scrolling.<br />
    Maybe you're looking for the real me.</p>

    <p><strong>You’re getting close.</strong></p>
  `,
  },
  {
    id: 2,
    title: "The Big Dream",
    date: "July 17, 2025",
    image: "/assets/blogs/big-dream.jpg",
    tags: ["Vision", "Future"],
    excerpt:
      "Dream big or stay stuck. Here’s what drives me and where I’m headed.",
    content: `
    <p>They say dreams should scare you.<br />
    Mine? They terrify me — and that’s how I know they’re real.</p>

    <p>I don’t just want to write code.<br />
    I want to architect systems that power the future.<br />
    AI-driven platforms. Secure infrastructures. Tools that redefine how we interact with technology.</p>

    <p>I imagine a world where my solutions run silently in the background of your life, making things faster, safer, smarter.<br />
    A world where someone says, “Who built this?” — and my name comes up.</p>

    <p>The big dream isn’t fame. It’s impact.<br />
    I don’t need the spotlight. I need legacy.<br />
    I want my fingerprints on the future, even if nobody sees them.</p>

    <p>Sometimes, I ask myself: “Is this too much?”<br />
    Then I remember: comfort never built history.<br />
    Discomfort is the price of doing something legendary.</p>

    <p>So here’s the plan: keep building, keep breaking limits, keep chasing the ideas that others call impossible.<br />
    Because if your dreams don’t make people doubt you, they’re too small.</p>

    <p><strong>This is The Big Dream. And I’m running toward it.</strong></p>
  `,
  },
  {
    id: 3,
    title: "My Silent Hours",
    date: "July 25, 2025",
    image: "/assets/blogs/silent-hours.jpg",
    tags: ["Life", "Mindset"],
    excerpt: "Midnight. The world sleeps. My best work wakes up.",
    content: `
    <p>There’s something about silence that turns my mind into a supercomputer.<br />
    No pings. No calls. No noise. Just me, my screen, and infinite possibilities.</p>

    <p>Most people chase productivity in the daylight.<br />
    I find mine in the dark — in those sacred hours when the world forgets me, and I forget the world.</p>

    <p>Lo-fi beats in my ears. Cursor blinking like a heartbeat.<br />
    It’s not just coding. It’s a vibe. A ritual. A way of life.</p>

    <p>People ask why I stay up late.<br />
    Because this is when I feel most alive.<br />
    When ideas flow like rivers and time stops existing.</p>

    <p>My silent hours aren’t lonely.<br />
    They’re the loudest conversations I’ll ever have — with my thoughts, my dreams, and my code.</p>
  `,
  },
  {
    id: 4,
    title: "The Art of Debugging",
    date: "July 22, 2025",
    image: "/assets/blogs/debugging-art.jpg",
    tags: ["Tech", "Mindset"],
    excerpt:
      "Debugging isn’t just a task. It’s an art form that separates coders from creators.",
    content: `
    <p>Anyone can write code.<br />
    But when it breaks? That’s where the real craft begins.</p>

    <p>Debugging isn’t frustration; it’s detective work.<br />
    Every bug is a clue. Every error message, a whisper pointing to the truth.<br />
    The question is — do you have the patience to listen?</p>

    <p>I’ve spent hours staring at the same block of code, wondering why reality doesn’t match logic.<br />
    And then, <em>click</em> — the realization hits. That dopamine rush is addictive.</p>

    <p>The art of debugging isn’t about speed.<br />
    It’s about precision. Curiosity. The mindset that says:<br />
    “I’m not leaving until I understand.”</p>

    <p>For me, debugging is meditation in chaos.<br />
    It’s me versus the unknown — and I love the fight.</p>
  `,
  },

  {
    id: 5,
    title: "Why I Love FastAPI",
    date: "July 20, 2025",
    image: "/assets/blogs/fastapi-love.jpg",
    tags: ["Tech", "Backend"],
    excerpt:
      "Fast. Modern. Elegant. Here’s why FastAPI has my developer heart.",
    content: `
    <p>When you’ve written APIs for a while, you start craving one thing: <strong>speed without pain</strong>.<br />
    FastAPI delivers that — and more.</p>

    <p>I’ve used frameworks that made me feel like I was dragging an anchor uphill.<br />
    With FastAPI, everything flows.<br />
    Type hints. Auto docs. Async support out of the box. It feels like Python — but leveled up.</p>

    <p>The beauty of FastAPI isn’t just speed; it’s elegance.<br />
    You write less, achieve more, and the code looks clean enough to frame on your wall.</p>

    <p>For someone who loves building scalable systems and AI-driven backends, this framework is a cheat code.<br />
    It just gets out of your way and lets you <em>create</em>.</p>

    <p>In a world obsessed with complexity, FastAPI reminds me that power can be simple.<br />
    And that’s why it’s more than just a tool — it’s a philosophy I vibe with.</p>
  `,
  },
  {
    id: 6,
    title: "Security is Not Optional",
    date: "July 28, 2025",
    image: "/assets/blogs/security.jpg",
    tags: ["Cybersecurity", "Tech"],
    excerpt:
      "Security isn’t a feature. It’s the foundation. And ignoring it? That’s the fastest way to fail.",
    content: `
    <p>Too many developers treat security like an afterthought.<br />
    As if it’s a checkbox you tick at the end of the sprint.<br />
    Let me tell you something: <strong>it’s not.</strong></p>

    <p>Security is culture.<br />
    It’s discipline.<br />
    It’s the difference between a product that survives and one that burns in headlines.</p>

    <p>I’ve seen projects built with stunning UI and flawless features — all destroyed by a single exploit.<br />
    Why? Because someone thought security could wait.</p>

    <p>For me, security is non-negotiable.<br />
    It’s embedded in every function, every architecture decision, every line of code.<br />
    Because a system that isn’t safe isn’t just broken — it’s dangerous.</p>

    <p>Build fast. Innovate hard.<br />
    But never, <em>ever</em> compromise on security.<br />
    Because in tech, trust is the only currency that matters.</p>
  `,
  },
  {
    id: 7,
    title: "How I Think About AI",
    date: "August 1, 2025",
    image: "/assets/blogs/ai-mindset.jpg",
    tags: ["AI", "Future"],
    excerpt:
      "AI isn’t magic. It’s math with ambition. Here’s my take on its role in our future.",
    content: `
    <p>People talk about AI like it’s some mythical force.<br />
    Let’s be real — it’s not magic.<br />
    It’s code. It’s math. But with ambition bigger than any human mind.</p>

    <p>The question isn’t <em>what can AI do?</em><br />
    It’s <em>how far will we let it go?</em></p>

    <p>I think of AI as an amplifier.<br />
    It magnifies human potential — and human flaws.<br />
    It doesn’t replace us. It reflects us.</p>

    <p>For me, AI is a tool. A partner. A mirror.<br />
    It’s not about fearing the takeover. It’s about steering the ship.<br />
    Because if we don’t, someone — or something — else will.</p>

    <p>The future isn’t man versus machine.<br />
    It’s man plus machine.<br />
    And I’m here to build that alliance, not watch it happen.</p>
  `,
  },
  {
    id: 8,
    title: "The Love Of My Life?",
    date: "August 5, 2025",
    image: "/assets/blogs/love-life.jpg",
    tags: ["Life", "Personal"],
    excerpt:
      "People ask what I love most. Here’s the truth — and it’s not what you think.",
    content: `
    <p>People ask me: “What’s the love of your life?”<br />
    They expect me to say a name. A face. A memory.<br />
    They never expect me to say this.</p>

    <p>The love of my life isn’t a person.<br />
    It’s the craft.<br />
    The art of building something out of nothing.<br />
    Turning blank screens into living, breathing systems.</p>

    <p>Code is more than syntax to me.<br />
    It’s poetry in logic.<br />
    It’s creation disguised as computation.<br />
    Every function, every loop, every little decision — that’s intimacy to me.</p>

    <p>And maybe that’s why relationships feel... complicated.<br />
    Because I’m already in one — with the work, the grind, the late nights, the big dreams.<br />
    It’s a love that doesn’t betray me. A love that rewards effort with results.</p>

    <p>So, the love of my life?<br />
    It’s not who. It’s what.<br />
    And until someone understands that — this love isn’t negotiable.</p>
  `,
  },
  {
    id: 9,
    title: "Why I Code at 2 AM",
    date: "August 10, 2025",
    image: "/assets/blogs/code-at-2am.jpg",
    tags: ["Life", "Mindset"],
    excerpt:
      "People think it's unhealthy. For me, it's therapy. Here’s why 2 AM is when I’m most alive.",
    content: `
    <p>The world sleeps at 2 AM.<br />
    I don’t. That’s when I wake up inside.</p>

    <p>No notifications. No chaos. Just silence and the soft glow of a screen.<br />
    For some, it’s insomnia. For me, it’s clarity.</p>

    <p>At 2 AM, ideas stop competing with noise.<br />
    The world feels slower. My thoughts feel faster.<br />
    Every bug I fix, every feature I build — it all feels louder in the quiet.</p>

    <p>People say, “Work-life balance.”<br />
    But for me, this <em>is</em> balance.<br />
    Coding isn’t stress; it’s my escape. My meditation.</p>

    <p>So why do I code at 2 AM?<br />
    Because that’s when my best work happens.<br />
    When time doesn’t matter, and everything else fades away.</p>
  `,
  },
  {
    id: 10,
    title: "The Developer’s Paradox",
    date: "August 15, 2025",
    image: "/assets/blogs/dev-paradox.jpg",
    tags: ["Tech", "Philosophy"],
    excerpt:
      "We build for simplicity but thrive in complexity. That’s the paradox of our craft.",
    content: `
    <p>Developers dream of simplicity.<br />
    Clean UI. Seamless UX. Smooth, elegant systems.<br />
    But here’s the paradox — we live in complexity.</p>

    <p>Underneath every “simple” button is a web of logic.<br />
    Behind every smooth user experience is chaos stitched together with precision.</p>

    <p>We build to hide complexity, but we live in it.<br />
    We love problems that others run from. We take pride in solving the unseen.</p>

    <p>The paradox? We chase perfection knowing it doesn’t exist.<br />
    We debug bugs that were born from fixing other bugs.<br />
    It’s a loop — and we love the loop.</p>

    <p>The developer’s paradox isn’t a curse.<br />
    It’s what makes us creators, not just coders.<br />
    Complexity is our canvas. Simplicity is our art.</p>
  `,
  },
  {
    id: 11,
    title: "The Typing Grind",
    date: "June 28, 2025",
    image: "/assets/blogs/typing.jpg",
    tags: ["Skills", "Productivity"],
    excerpt: "From 90 WPM to 120 WPM: Why I trained like a maniac.",
    content: `
    <p>Typing is underrated.<br />
    Everyone thinks it’s just about pressing keys faster.<br />
    For me, it’s about <strong>speed, flow, and dominance</strong>.</p>

    <p>When I hit 90 WPM, I felt good.<br />
    But good isn’t enough for me.<br />
    I wanted elite. I wanted to break 120 WPM — and I did.</p>

    <p>Why? Because speed matters.<br />
    Faster typing means faster thinking.<br />
    It means fewer bottlenecks between your brain and the screen.</p>

    <p>I trained like an athlete.<br />
    Hours on Monkeytype. Finger drills. Consistency.<br />
    And when I hit my goal, it wasn’t just numbers — it was a mindset shift.</p>

    <p>The Typing Grind taught me something bigger:<br />
    Small habits, done daily, compound into mastery.<br />
    And mastery? That’s addictive.</p>
  `,
  },
  {
    id: 12,
    title: "Learning Never Stops",
    date: "June 25, 2025",
    image: "/assets/blogs/learning.jpg",
    tags: ["Mindset", "Growth"],
    excerpt: "Why I never stop learning and you shouldn’t either.",
    content: `
    <p>Tech moves fast.<br />
    If you’re not learning, you’re falling behind.<br />
    That’s the brutal truth.</p>

    <p>I live by a simple rule:<br />
    <strong>Every day, learn something new.</strong><br />
    It doesn’t have to be huge — a new API, a fresh concept, a tiny optimization.<br />
    But it has to be something.</p>

    <p>Learning isn’t a phase.<br />
    It’s survival.<br />
    And beyond survival, it’s growth.</p>

    <p>The world doesn’t slow down for anyone.<br />
    You either move with it or watch it leave you in the dust.<br />
    I’ve chosen to move.</p>

    <p>So yeah — learning never stops.<br />
    And for me, it never will.</p>
  `,
  },
  {
    id: 13,
    title: "The Merrylow Journey",
    date: "June 22, 2025",
    image: "/assets/blogs/merrylow.jpg",
    tags: ["Startup", "Backend"],
    excerpt: "How I built Merrylow from scratch with a killer team.",
    content: `
    <p>Merrylow wasn’t just a project.<br />
    It was a battlefield.<br />
    And I loved every second of the fight.</p>

    <p>From brainstorming on rough notes to deploying on a live server,<br />
    every step tested our skills, our patience, and our drive.</p>

    <p>I took on backend and DevOps.<br />
    Node.js, Express, PostgreSQL, Prisma — all wired together with care.<br />
    Secure APIs, clean architecture, automation — the works.</p>

    <p>Then came deployment.<br />
    VPS setup. NGINX configs. GitHub Actions for CI/CD.<br />
    It wasn’t glamorous, but it was real engineering — and it worked.</p>

    <p>Merrylow taught me what it takes to build from zero.<br />
    It’s not just code.<br />
    It’s persistence. It’s strategy. It’s believing in the vision when nothing exists yet.</p>

    <p>This isn’t the end of the story.<br />
    Merrylow is only the beginning.</p>
  `,
  },
];

export default blogs;
