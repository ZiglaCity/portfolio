const blogs = [
  {
    id: 1,
    title: "The Real Me",
    date: "January 1, 2025",
    image: new URL("../assets/blogs/real-me.jpg", import.meta.url).href,
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
    date: "January 2, 2025",
    image: new URL("../assets/blogs/big-dream.png", import.meta.url).href,
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
    title: "My Other Side",
    date: "January 5, 2025",
    image: new URL("../assets/blogs/my-other-side.jpg", import.meta.url).href,
    tags: ["Life", "Passion"],
    excerpt:
      "Before the code, there was rhythm. There was a ball. There was a stage.",
    content: `
    <p>Most people know me as Zigla — the guy building systems and chasing big tech dreams.<br />
    But let me pull back the curtain: <strong>I wasn’t always just about code.</strong></p>

    <p>Before the screens, I lived in motion.<br />
    Freestyle football wasn’t a side thing — it was my obsession.<br />
    I’d spend hours perfecting spins and flicks, posting videos that hit thousands of views.<br />
    At my peak, I had <strong>3K Instagram followers</strong> just watching me turn a ball into art.</p>

    <p>And then there was music.<br />
    Back in high school, I lived in the studio.<br />
    Writing lyrics that felt like truth, spitting bars over beats that shook the classroom walls.<br />
    I wasn’t just coding — I was rhyming, flowing, building verses with the same precision I now put into my functions.</p>

    <p>But that’s not all.<br />
    I was a dancer — and not just any dancer.<br />
    Back in junior high, I was <strong>the best in my area</strong>.<br />
    Every move had energy. Every step had confidence. I owned the floor before I ever owned a GitHub repo.</p>

    <p>Weekends? Skating was life.<br />
    Heelys in school, roller skates on the streets.<br />
    The thrill of gliding, the freedom of motion — I lived for it.<br />
    I used to do a lot, because life was about expression, not limits.</p>

    <p>Now, people ask: “What happened to all that?”<br />
    Truth is, nothing happened.<br />
    Those worlds live in me. They taught me rhythm, creativity, and flow — the same energy I bring to every line of code today.</p>

    <p>So, if you think you know me because you’ve seen my code?<br />
    Think again.<br />
    There’s always another side.</p>
  `,
  },
  {
    id: 4,
    title: "My Silent Hours",
    date: "January 7, 2025",
    image: new URL("../assets/blogs/silent-hours.jpg", import.meta.url).href,
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
    id: 5,
    title: "The Art of Debugging",
    date: "January 12, 2025",
    image: new URL("../assets/blogs/debugging-art.jpg", import.meta.url).href,
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
    id: 6,
    title: "The Merrylow Journey",
    date: "January 20, 2025",
    image: new URL("../assets/blogs/merrylow.jpg", import.meta.url).href,
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
  {
    id: 7,
    title: "Security is Not Optional",
    date: "February 9, 2025",
    image: new URL("../assets/blogs/security.jpg", import.meta.url).href,
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
    id: 8,
    title: "The Typing Grind",
    date: "February 18, 2025",
    image: new URL("../assets/blogs/typing.jpg", import.meta.url).href,
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
    id: 9,
    title: "The Love Of My Life?",
    date: "March 6, 2025",
    image: new URL("../assets/blogs/love-life.jpeg", import.meta.url).href,
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
    id: 10,
    title: "Why I Code at 2 AM",
    date: "March 10, 2025",
    image: new URL("../assets/blogs/code-at-2am.jpg", import.meta.url).href,
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
    id: 11,
    title: "The Developer’s Paradox",
    date: "April 1, 2025",
    image: new URL("../assets/blogs/dev-paradox.jpg", import.meta.url).href,
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
    id: 12,
    title: "How I Think About AI",
    date: "May 15, 2025",
    image: new URL("../assets/blogs/ai-mindset.jpeg", import.meta.url).href,
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
    id: 13,
    title: "Learning Never Stops",
    date: "June 25, 2025",
    image: new URL("../assets/blogs/learning.jpg", import.meta.url).href,
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
    id: 14,
    title: "Why I Love FastAPI",
    date: "July 10, 2025",
    image: new URL("../assets/blogs/fastapi-love.jpg", import.meta.url).href,
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
    id: 15,
    title: "Confessions of a Developer",
    date: "July 17, 2025",
    image: new URL("../assets/blogs/confessions.png", import.meta.url).href,
    tags: ["Humor", "Life"],
    excerpt:
      "Bugs, coffee, and questionable life choices — here’s my honest truth.",
    content: `
   <p>We developers like to act like we’ve got everything under control.<br />
    But the truth? We’re a walking collection of bugs and coping mechanisms.<br />
    Here are my <strong>10 real confessions</strong>:</p>

    <p><strong>Confession #1:</strong><br />
    I’ve Googled “How to center a div” more times than I’ve Googled my own name.<br />
    And yes, I still forget sometimes.</p>

    <p><strong>Confession #2:</strong><br />
    I drink coffee for “focus”… but really, it’s just part of the aesthetic.<br />
    Hacker movie vibes, you know?</p>

    <p><strong>Confession #3:</strong><br />
    I’ve broken production more than once and blamed it on “the API”.<br />
    (Sorry, API.)</p>

    <p><strong>Confession #4:</strong><br />
    I once spent six hours debugging a bug that didn’t exist.<br />
    The real issue? I forgot to save the file.</p>

    <p><strong>Confession #5:</strong><br />
    Sometimes I write <em>// TODO</em> in my code just to feel organized.<br />
    Do I ever come back to it? Nope.</p>

    <p><strong>Confession #6:</strong><br />
    I’ve used console.log as a debugging tool in a million-dollar codebase.<br />
    And I’d do it again.</p>

    <p><strong>Confession #7:</strong><br />
    I’ve deployed something without testing because “it should work”.<br />
    Guess what? It didn’t.</p>

    <p><strong>Confession #8:</strong><br />
    I once fixed a bug by accident… and pushed it like I knew what I was doing.</p>

    <p><strong>Confession #9:</strong><br />
    I still copy-paste from Stack Overflow like it’s a sacred ritual.<br />
    The real MVP? Ctrl + C and Ctrl + V.</p>

    <p><strong>Confession #10:</strong><br />
    Sometimes I rename variables from <em>x</em> to <em>data</em> and call it “refactoring”.<br />
    Don’t judge me.</p>

    <p>So yeah, these are my confessions.<br />
    If you’re a developer and you didn’t relate to at least three of these…<br />
    you’re lying.</p>
  `,
  },
];

export default blogs;
