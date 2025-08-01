const blogs = [
  {
    id: 1,
    title: "The Real Me",
    date: "January 1, 2025",
    image: new URL("../assets/blogs/real-me.png", import.meta.url).href,
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
  {
    id: 16,
    title: "Why I'm SOLO",
    date: "July 17, 2025",
    image: new URL("../assets/blogs/solo.jpg", import.meta.url).href,
    tags: ["Life", "Mindset", "Hustle"],
    excerpt:
      "Some call it lonely. I call it alignment. This is why I’m riding solo—and why it feels like peace.",
    content: `
      <p>I stumbled on this track called <em>"I’m SOLO"</em>, and let me tell you—it’s not just a song; 
      it’s an anthem for anyone grinding silently, questioning the norms, and chasing a vision bigger than themselves.</p>

      <p>
      The lyrics hit home:  
      <em>"They try to tell me get a job, and pick a realistic goal  
      I would rather die young than live for anybody else."</em>
        
      That line? That’s everything. Because I’ve been there—the constant pressure to "fit in," to follow a predictable script, when deep down you know you’re built for something different.
      </p>

      <p>
      Ever since I started building, I’ve been mostly by myself. Not because I hate people. Not because I can’t vibe. But because purpose demands solitude. It’s where the real work happens.  
      Like the hook says:  
      <em>"I’m SOLO... Secrets only live outside  
      I’m DOLO... It’s not a lot of people that I like I know."</em>
      </p>

      <p>
      And honestly, I relate. This path can be isolating. I’ve lost relationships. Missed out on weekends. Turned down parties. But every sacrifice is a brick in the foundation of the future I’m building.  
      Would I change it? No. Because the truth is, I find peace in the work. It’s not punishment—it’s passion.
      </p>

      <p>
      So if you’re out there feeling the same—different, distant, driven—remember this: You’re not crazy for wanting more. You’re just SOLO. And maybe that’s exactly what you need to win.
      </p>
    `,
  },
  {
    id: 17,
    title: "The Paradox of Modern Freedom",
    date: "July 18, 2025",
    image: new URL("../assets/blogs/modern-freedom.png", import.meta.url).href,
    tags: ["Life", "Society", "Mindset"],
    excerpt:
      "We have the freedom to do anything—but somehow, that’s exactly why so many of us feel lost.",
    content: `
      <p>
      We live in a time where freedom is at its peak. You can work remotely from a beach, start a business from your bedroom, date anyone across the globe, and learn anything online for free. Sounds like paradise, right?
      </p>

      <p>
      But here’s the paradox: Unlimited options don’t make us free. They make us anxious.
      </p>

      <p>
      Modern life comes with an unspoken pressure: <strong>“If you’re not successful, it’s your fault because you had every opportunity.”</strong> So we scroll through Instagram, comparing our behind-the-scenes to someone else’s highlight reel, thinking, <em>“Why am I not living like that?”</em>
      </p>

      <p>
      We’ve replaced simplicity with a constant chase for what’s next. We don’t sit with boredom anymore; we binge, scroll, consume. We’ve mistaken access for meaning, and now we’re paying the price.
      </p>

      <p>
      Maybe freedom was never about endless options. Maybe it’s about making a few choices that matter—and shutting the rest out.
      </p>
    `,
  },

  {
    id: 18,
    title: "Women in Tech — Breaking Barriers or Building New Ones?",
    date: "July 18, 2025",
    image: new URL("../assets/blogs/women-in-tech.webp", import.meta.url).href,
    tags: ["Tech", "Diversity", "Opinion"],
    excerpt: "Diversity is trending. But is it progress… or PR?",
    content: `
      <p>
      Tech loves buzzwords: AI, Blockchain, Innovation. And now? <strong>Diversity.</strong>
      </p>

      <p>
      Companies plaster “We support women in tech” all over their job posts. Sounds great. But here’s the uncomfortable question: Are they doing it for impact… or for image?
      </p>

      <p>
      Don’t get me wrong—progress is real. Women are coding, leading, and building empires in tech like never before. But sometimes it feels like the movement has been hijacked by corporate virtue signaling. Diversity without inclusion is just a checkbox.
      </p>

      <p>
      Empowerment should never be about token seats in boardrooms or PR campaigns during Women’s Month. It’s about mentorship, equal pay, real growth opportunities—and not making women feel like they have to “prove” they belong.
      </p>

      <p>
      So here’s to the real builders—the women who don’t just want a seat at the table but are building their own tables. Respect where it’s due.
      </p>
    `,
  },
  {
    id: 19,
    title: "Am I Really Me?",
    date: "July 18, 2025",
    image: new URL("../assets/blogs/am-i-me.png", import.meta.url).href,
    tags: ["Life", "Identity", "Mindset"],
    excerpt:
      "Online, I’m bold and unstoppable. Offline? Sometimes I don’t even want to say hi. So… which one is real?",
    content: `
      <p>
      Ever feel like you’re two completely different people? Because I do—every single day.
      </p>

      <p>
      Online, I’m loud. Funny. The guy dropping memes and one-liners like confetti. The type of dude who makes everyone laugh in the group chat, who seems like he’s got endless energy. But offline? 
      </p>

      <p>
      Let’s just say… if social energy was a battery, mine dies faster than an iPhone on 2% playing TikToks. Suddenly, I’m the quiet guy in the corner, overthinking if I should even wave at someone I know. Talking to a girl? Might as well ask me to solve world hunger first.
      </p>

      <p>
      So which one is the real me? The truth is… both. We’ve all got layers. Maybe the internet just lets me be the version of me that doesn’t need to fight social anxiety, judgment, or awkward stares. Maybe being “me” isn’t about picking one side. It’s about owning every side.
      </p>

      <p>
      Because, real talk: Nobody’s just one thing. We’re all chameleons in our own way. I just happen to switch colors between Wi-Fi and real life.
      </p>
    `,
  },
  {
    id: 20,
    title: "Life Sucks… But Who Cares?",
    date: "July 27, 2025",
    image: new URL("../assets/blogs/life-sucks.png", import.meta.url).href,
    tags: ["Life", "Mindset", "Hustle"],
    excerpt:
      "When life throws punches, you don’t cry about the pain—you learn how to swing back. This is why I keep grinding when everything falls apart.",
    content: `
      <p>
      Let’s keep it real: life isn’t always fair. Some days, it feels like the universe wakes up and says, “Let’s mess with Zigla today.” And trust me, I’ve had a few of those days lately.
      </p>

      <p>
      Not too long ago, I planned out the perfect break. A whole vacation dedicated to taking online courses, building projects, and leveling up my skills. Everything was set. And then… my laptop broke. Gone. Just like that, my entire plan went down the drain.
      </p>

      <p>
      Fast forward a few months—life seemed like it was finally picking up. I landed internships, started preparing for exams, and had projects lined up that I was genuinely excited about. Then it happened again. Got robbed. Lost my phone, my SIM cards (goodbye, 2FA logins), and my mini MiFi—the one thing that keeps me connected and working online.
      </p>

      <p>
      At first, it felt like the final straw. Like, how many times can life hit you before you tap out? But then I realized something: nobody cares. Harsh? Yeah. True? Absolutely. The world doesn’t stop spinning because Zigla had a bad day. Deadlines don’t care about your Wi-Fi. Clients don’t care about your stolen phone. And opportunities? They don’t wait for anyone.
      </p>

      <p>
      So, what now? You get up. You show up. You put in the work—even when it sucks. Because giving up doesn’t make the pain go away. It just adds regret to the list. And I refuse to live with that.
      </p>

      <p>
      Life sucks sometimes. But quitting sucks more. And if this storm doesn’t break me, then it’s only making my grind legendary. So yeah… still here. Still coding. Still dreaming. Still building. Because the only way out is through.
      </p>
    `,
  },
  {
    id: 21,
    title: "Could You Survive Being Me?",
    date: "July 28, 2025",
    image: new URL("../assets/blogs/survive-me.png", import.meta.url).href,
    tags: ["Life", "Struggle", "Mindset", "Privilege"],
    excerpt:
      "Privilege? Never had it. Luck? Rarely. Yet somehow, I keep showing up in spaces they said I’d never reach. Could you survive being me?",
    content: `
    <p>
      Let’s be real — some people were born on the finish line. Me? I started where the track didn’t even exist.
    </p>

    <p>
      Let’s talk academics. I’ve never been a resident on campus — not because I didn’t want to, but because I could never afford it. Do you know what that means? It means missing in-person lectures, quizzes, and those surprise attendance checks that could tank your grade. It means rushing through traffic for a 30-minute paper you might not even get to write if you’re late. And yet, somehow, I’ve managed to stay in the 95% category with a GPA above 3.8.
    </p>

    <p>
      And it wasn’t easy. There were moments I almost gave up entirely — like when the academic fee deadline was breathing down my neck and I had no idea how I was going to pay. You’re performing at your best, getting top scores, and still thinking, “What’s the point if I can’t even stay enrolled?” I applied for scholarships, nailed the interviews, but guess what? Luck never smiled. That stings in ways I can’t even explain.
    </p>

    <p>
      But the grind didn’t stop there. While juggling all that, I still fought for opportunities. And that’s how I became one of only TWO Level 200 students in my department to join A2SV — a program that handpicks the best coders on campus. I was competing against Level 300 and 400 CS and Engineering students, and in 12 of their weekly contests, I participated in 10 and finished top 3 in 8 of them. Not luck. Not privilege. Just pure willpower and work ethic.
    </p>

    <p>
      And this doesn’t end with academics or coding. My life has always been about making the most out of the least. Personality-wise? I’m the guy who can stay indoors for weeks. People in the same house can go months without seeing me. But that isolation? It’s not weakness. It’s where I build myself. A year ago, my typing speed was barely 30 WPM. I had a friend hitting 90+. Today? I type faster than him. Why? Because every second I get, I invest in me- not just typing tho!.
    </p>

    <p>
      None of this is to brag. It’s a survival story. I’ve had every reason to quit, but here I am. Because circumstances don’t define me — mindset does. Like NF said, “There’s millions of us just like you...” But here’s the question: how many make it through?
    </p>

    <p>
      So I ask again — could you survive being me?
    </p>
  `,
  },
  {
    id: 22,
    title: "Overthinker with Bad Memory",
    date: "July 29, 2025",
    image: new URL("../assets/blogs/overthinker-memory.png", import.meta.url)
      .href,
    tags: ["Mindset", "Logic", "Neurodivergence", "Personal"],
    excerpt:
      "Imagine having the brain of a master tactician but the memory of a goldfish. That’s me — I’ll solve your toughest logic problem and forget what I had for lunch.",
    content: `
  <p>
    Here’s something funny — I could invent a whole new algorithm from scratch in a contest because I dug so deep into a problem, only to later find out the official solution was just <b>Arrays.sort()</b>.
  </p>

  <p>
    And no, I’m not joking. My friends would solve the same question in under 3 minutes. I’d spend 45. Not because I was stuck — but because I was designing a full-on sorting network, convinced there had to be a trick. There wasn’t. But what I built actually worked — and they didn’t even understand how.
  </p>

  <p>
    That’s the life of someone with intense reasoning ability but mid-tier (at best) memory retention. I can pick apart abstract math and physics ideas like it’s nothing. I could listen to a complex concept once, and reconstruct it with even deeper insights. But ask me what we discussed yesterday over lunch? No clue. Gone. It’s like my brain filters out what it deems “non-essential” — and trust me, it’s ruthless.
  </p>

  <p>
    I’ve never been good with History. Couldn’t memorize dates or timelines if you paid me. In fact, if you offered me a full scholarship plus monthly stipend to study Medicine, I’d still say no. Not because I can’t reason through the biology — but because I know I’d forget half the memorized terms before the exam. That’s just how my mind works. It optimizes for logic, not recall.
  </p>

  <p>
    But when I enter a coding contest or solve a real-world logic puzzle, it’s like Hikaru playing bullet chess with 2 seconds on the clock. Everything connects instantly. I see through the noise, I bend rules (safely), and I create solutions that weren’t even in the textbook.
  </p>

  <p>
    It’s a weird paradox to live in — being brilliant in chaos and yet forgetful in calm. But I’ve learned to embrace it. Because even if I can’t remember what day it is, when the real challenge hits… I show up with answers no one else saw coming.
  </p>
  `,
  },
  {
    id: 23,
    title: "Nobody is *Literally* Safe Online. Here’s Why.",
    date: "July 29, 2025",
    image: new URL("../assets/blogs/nobody-safe.png", import.meta.url).href,
    tags: ["Cybersecurity", "Privacy", "Internet", "Mindset"],
    excerpt:
      "You think you're safe online because you don’t post much? Nah… you lost that privilege the moment you connected to the internet.",
    content: `
  <p>
    The moment you connect to the internet, you expose yourself. 
    Not because you posted a photo. 
    Not because you wrote a blog. 
    But because you simply… <strong>connected</strong>.
  </p>

  <p>
    Let’s clear this up real quick: <br>
    You don't need to overshare or post selfies to be vulnerable online. 
    The <em>real exposure</em> begins the second your device pings a Wi-Fi tower or connects to mobile data. 
    That tiny moment you hit <code>“I agree”</code> on terms and conditions you didn’t read—<strong>you’re already in the system</strong>.
  </p>

  <p>
    <em>“But I don’t log in to anything, I just browse.”</em>  
    Lol. That was valid in 2008.  
    Today, you can’t do anything meaningful online without logging in. 
    Platforms hold content hostage until you give up your identity. 
    Some restrict research papers, downloads, or even full articles unless you’re signed in.
  </p>

  <p>
    And let’s say you somehow sneak around unlogged—what happens when your device dies mid-task? 
    No account. No autosave. No cloud sync. All that progress? <strong>Gone</strong>.
  </p>

  <p>
    So now you’re <em>forced</em> to log in just to function. 
    And the moment you do, they know:
    <ul>
      <li>Your location</li>
      <li>Your IP address</li>
      <li>Your device model</li>
      <li>Your screen resolution, typing pattern, and more</li>
    </ul>
  </p>

  <p>
    <strong>The Illusion of Privacy</strong><br />
    “But I’ve never posted anything about myself.”  
    Cool. But… your number exists in a database somewhere.  
    Your name is on some graduation list.  
    You once gave your birthday for a discount code.  
    <strong>Bam. You’re already traceable.</strong>
  </p>

  <p>
    I can find you in under 10 minutes with just your number.  
    You don’t have to overshare to be <em>already shared</em>.  
    The web is connected in crazy, invisible ways.
  </p>

  <p>
    So who’s safe?<br />
    Nobody.  
    Not me. Not you. Not your grandma who only likes church flyers on Facebook.  
    The question isn’t <strong>“Am I vulnerable?”</strong>  
    It’s <strong>“How well can I protect myself?”</strong>
  </p>

  <p>
    Start here:
    <ul>
      <li>Use 2FA</li>
      <li>Don’t reuse passwords</li>
      <li>Actually read what you’re agreeing to</li>
      <li>Log out if you don’t need to stay in</li>
      <li>Don’t overshare, but also… don’t be delusional</li>
    </ul>
  </p>

  <p>
    If you’ve read my blogs, you probably feel like you know me.  
    Maybe you do.  
    But that doesn’t make you less vulnerable than I am.
  </p>

  <p>
    The game isn’t about avoiding exposure anymore—that ship has sailed.  
    It’s about <strong>minimizing risk</strong>.
  </p>

  <p>
    So next time you see someone sharing their life online, stop saying, “they’re making themselves vulnerable.”  
    <strong>We all already are.</strong><br />
    The real flex?  
    <strong>Knowing how to play defense.</strong>
  </p>
  `,
  },
  {
    id: 24,
    title: "Sorry Ain’t Answer… I’ve Been Busy",
    date: "July 29, 2025",
    image: new URL("../assets/blogs/sorry-aint-answer.png", import.meta.url)
      .href,
    tags: ["Reflection", "Life", "Growth", "Silence"],
    excerpt:
      "I used to live for the joy of dusty football and cheap ice cream. Now, I barely answer my phone. This one’s a reflection, raw and real.",
    content: `
    <p><em>“Sorry ain’t answer I’ve been busy, lot of things been bothering me lately wish I could go back in time and erase it.”</em><br/>— GTW Mik</p>

    <p>This line been ringing in my head all day. You know, I’ve been thinking about how good I had it as a kid. Charlie, Life's been moving too fast lately. Like I'm strapped to a rocket I didn’t even ask to ride.</p>

    <p>Like...<br/>I really used to live. Life wasn’t fancy or perfect or anything like that, but I swear it felt like I had the whole world in my palm. Back then, after school? Football every single day Shoes off, socks brown, hearts racing, legs running wild. We didn’t have a stadium — we had a dusty field, two stones as goalposts, and a reason to feel alive.
    We’d chase that ball till the sun disappeared and our shadows faded into dust.</p>

    <p>And brooo, if you ever heard about a party in the hood? Best believe I was there. Not for drinks. Not for girls. But for those dancing competitions. I remember winning 1 cedi one time — deadass felt like I just hit the lottery. Split it with my boys, gave 20 pesewas each to two of them, and we ran straight to the ice cream seller like kings. </p>

    <p>Weekends? Skating. Biking. Skating again. And then maybe gambling with rubber bands like our lives depended on it. Grandpa would call me over and we’d play cards — not even for the game’s sake, but just to laugh, talk, and feel alive. I had my lil bro with me too, and we’d turn the house upside down with made-up games that made zero sense but felt like everything, break random things and then run from random beatings. </p>

    <p>Now? It’s like I’m here, but also… not really. <br>I barely want to talk to anyone. Not out of hate, just… don’t feel like it. My phone could ring twenty times and I wouldn’t flinch. Earphones in, heart locked, mind drowning in music and these dreams bigger than my head can even carry. I just stare at my dark screen — not sad, not depressed or anything like that, just… floating. </p>
    
    <p>We all wanted to grow up. Chase something bigger. Live something better. But truth is, I’d trade a thousand “busy” days for one more sunny afternoon with a rubber band in my pocket and a coin in my shoe, waiting for the next party beat to drop. </p>

    <p>But hey… <br>I ain’t sad. <br>I’m just soaking in the silence. <br>Till then…<br/>I’ll just keep floating in my own world.<br/>Shoot my shot at the grind —<br/>Hope I don’t miss it.</p>
  `,
  },
  {
    id: 25,
    title: "Is Comparison Really the Thief of Joy?",
    date: "July 30, 2025",
    image: new URL("../assets/blogs/comparison-thief.png", import.meta.url)
      .href,
    tags: ["Mindset", "Growth", "Coding Journey", "Real Talk"],
    excerpt:
      "One second you’re working, next you’re deep in someone else’s GitHub portfolio, questioning your whole existence. So is comparison killing your joy… or is it fueling the grind?",
    content: `
  <p>
    Sometimes, I’m just casually working on my laptop — headphones in, tabs open, maybe sipping something cold — when I accidentally (on purpose?) end up deviating a little. Just a bit, right?
  </p>

  <p>
    Next thing I know, I’m knee-deep in someone’s GitHub — a dev who’s been writing code since the early 2010s, publishing open-source tools, maintaining sleek packages, building startups, and doing God-knows-what with AI. 
    It starts out as admiration, but it slowly morphs into a low hum of <em>“Damn… what have I even done?”</em>
  </p>

  <p>
    I mean, these folks are certified beasts. Their commits read like symphonies. Their portfolios are filled with battle-tested apps and clean, type-safe wizardry. And here I am — not even two full years deep into this dev journey — somehow measuring myself on the same scale. Like… what?
  </p>

  <p>
    It’s wild how quick the mind is to forget time, context, and reality.
  </p>

  <h3>When Comparison Stings</h3>
  <p>
    It’s true — comparison can absolutely steal your joy. You start the day feeling productive, get a few things done, maybe squash a few bugs or finish a feature. 
    And then, out of nowhere, that innocent detour becomes a deep dive into someone else’s journey. 
    A journey that didn’t start yesterday, btw. A journey built on years — of failures, pivots, persistence, mentorship, and timing.
  </p>

  <p>
    And yet we forget that.
  </p>

  <p>
    Suddenly, your achievements feel small. Your growth feels slow. You start questioning if you’re really cut out for this. 
    And the worst part? It happens quietly. It doesn’t yell — it just whispers: <em>“You should be further by now.”</em>
  </p>

  <p>
    But… who says?
  </p>

  <h3>When Comparison Fuels</h3>
  <p>
    Here’s the twist though — sometimes that very comparison? It lights a fire.
  </p>

  <p>
    There’ve been days I’ve stumbled on a dev’s project or personal site and instead of falling into a pit of self-doubt, I’ve come out supercharged. 
    Like, <em>“Yo, I wanna build something clean like this. I wanna ship. I wanna learn that tech stack. I wanna get there.”</em>
  </p>

  <p>
    It’s weird, but depending on the day, the mood, or even how much sleep I’ve had — comparison either crushes me or carries me. 
    Some days, I compare myself to people who started just before me or are slightly ahead, and I’m like, yo, I’m cooking. 
    The code may be messy sometimes, but the vision? Still sharp.
  </p>

  <p>
    Funny thing though — even when I do outperform expectations or build something solid, I still never really feel ahead. Like ever.
  </p>

  <p>
    Why? Maybe it’s because I know how much I don’t know yet. Or maybe it’s because deep down, I’m scared that feeling “on top” might make me complacent.
  </p>

  <p>
    So I stay hungry. Almost too hungry sometimes.
  </p>

  <h3>The Real Thief of Joy?</h3>
  <p>
    If I’m being honest, maybe comparison isn’t the thief of joy — maybe <strong>forgetting your own timeline</strong> is. 
    Maybe joy starts to slip when you stop appreciating how far you’ve come. 
    When you zoom too far out, or too far ahead, and forget that two years ago you didn’t even know what the hell a “middleware” was.
  </p>

  <p>
    <strong>Perspective matters.</strong>
  </p>

  <p>
    It’s okay to look up — just don’t look so long that you forget to look around. 
    It’s okay to feel behind — just don’t let that stop you from showing up. 
    And if you're gonna compare, compare with yourself last month, not a 10-year veteran’s highlight reel.
  </p>

  <h3>Final Note</h3>
  <p>
    Growth ain’t linear. Confidence isn’t permanent. Some days, you’ll feel like a genius. Other days, imposter syndrome will hit like a truck. That’s normal.
  </p>

  <p>
    What matters is you don’t let the voice of comparison drown out the voice of curiosity.
  </p>

  <p>
    So yeah… maybe I’ll scroll GitHub less. <br>
    Or maybe I won’t.
  </p>

  <p>
    But either way, I’ll remember: <br>
    I’m not late. <br>
    I’m not lost. <br>
    I’m just learning. <br>
    And that's more than enough.
  </p>
  `,
  },
  {
    id: 26,
    title: "Am I Really Gay?",
    date: "July 30, 2025",
    image: new URL("../assets/blogs/am-i-gay.png", import.meta.url).href,
    tags: ["Personal", "Unfiltered", "Real Talk", "LOL"],
    excerpt:
      "Male friends? Got a few. Female friends? Got none. So does that mean I’m gay? Maybe. Or maybe I’m just... happy as hell. Let’s unpack it.",
    content: `
  <p>
    Male friends, I got a few of them. Female friends? <strong>Zero.</strong> So does that mean I’m gay?
  </p>

  <p>
    Well, it depends on what you mean by <em>gay</em>. To me, gay means being happy. And bro — <strong>I’m happy as fuck!</strong> 😅
  </p>

  <p>
    I’m not saying I’m happy <em>because</em> I’m gay oooh. Eih. But if gay means happy, and I’m happy, then... does that mean I’m gay because I’m happy? Or happy because I’m gay?
  </p>

  <p>
    See, we’ll probably never know. But let me be honest — the idea of having a female friend has never even crossed my mind.
  </p>

  <p>
    That’s why I could collect the number of the nicest girl on campus <em>during an exam</em>... and instead of texting “Hi 👋”, I sent her... a file. <br>
    A whole <strong>PDF dossier of herself.</strong>
  </p>

  <p>
    And when I say “herself,” I mean I attached her picture, wrote her full name, described her family, named her father, mother, and even her brother.
  </p>

  <p>
    Yeah... her brother. <em>That guy’s a senior Java developer in some country outside Ghana.</em> And I kinda fell in love with his LinkedIn profile.
  </p>

  <p>
    Some people will call it creepy. I call it beautiful. It felt <strong>right</strong>, you know?
  </p>

  <p>
    And that’s when the floodgates opened. The girl who normally replies with “k”, “yh”, “hmm”... suddenly turned into a <em>whole</em> novelist.
  </p>

  <p>
    “How did you know this?” <br>
    “Where did you see that?” <br>
    “Why won’t you answer my questions?” <br>
    “ARE YOU OKAY??” <br>
    <br>
    Messages just kept dropping like rainfall in Takoradi. And me? I just went offline — <strong>intentionally</strong>. 😎
  </p>

  <p>
    When I came back, more paragraphs were waiting. That's how the convo began.
  </p>

  <h3>But the Old Me?</h3>
  <p>
    That guy who used to Google: <br>
    <em>“How to talk to girls”</em><br>
    <em>“How to keep a convo going with a girl”</em><br>
    <em>“What to ask a girl you like”</em><br>
    That guy is long gone.
  </p>

  <p>
    Now? If you don’t text back — cool. We move. My time? <strong>Fucking valuable</strong>. And I’m not sharing that with just anyone’s daughter.
  </p>

  <h3>So... Am I Gay?</h3>
  <p>
    Maybe I am. Maybe I’m just <strong>peaceful</strong>. Maybe I just like vibes over flirting. Maybe I just want my energy to stay clean and unbothered.
  </p>

  <p>
    Will I stay gay forever? Maybe yes. But the <em>other</em> gay? Definitely not. I just know this isn’t the season for that.
  </p>

  <p>
    So to any girl out there I might be ignoring: <br>
    <strong>I hope you forget me.</strong><br>
    I’m just gay.
  </p>
  `,
  },
  {
    id: 27,
    title: "How Productive Could You Be Without Internet Access?",
    date: "August 1, 2025",
    image: new URL("../assets/blogs/offline-productivity.png", import.meta.url)
      .href,
    tags: ["Personal", "Dev Life", "Offline Mode", "Focus"],
    excerpt:
      "No Wi-Fi. No distractions. Just me, my code, and some aggressive console.logs. Offline mode turned me into a productivity beast.",
    content: `
    <p>(...asking for a friend — that friend is me.)</p>

    <p>Let’s be honest. In this modern age, life without the internet sounds like some survivalist reality TV challenge. Everyone’s connected — your toaster probably has Wi-Fi. But me? I’m thriving in what I like to call: <strong>Offline Beast Mode</strong>.</p>

    <p>See, I’m not boycotting the internet on purpose. It’s not some deep philosophical stand. I just literally don’t have any. No Wi-Fi. No mobile data. Just vibes. The only time I get access is when I hike my ass to campus, and then it’s a full-on downloading frenzy: docs, packages, StackOverflow threads, random dev memes — you name it.</p>

    <p>But when I’m home?<br />It’s a no-internet, all-grind zone.</p>

    <p>And weirdly enough, it’s turned me into a productivity monster. No WhatsApp messages. No endless scrolling. No “quick” YouTube breaks that somehow last 2 hours. Just me, my code, and the sweet sound of the fan spinning like it’s got problems.</p>

    <h3>Debugging without Google: A Spiritual Journey</h3>

    <p>You ever tried debugging a nasty error without Google or ChatGPT? It starts off with optimism:<br />
    <em>"Hmm... this should work."</em><br />
    Then...<br />
    <em>"Wait, why the hell is this breaking?"</em><br />
    Then finally, you unleash your ultimate weapon:</p>

    <pre><code>console.log("What the fuck is happening here")</code></pre>

    <p>Still nothing. You’re staring at your terminal like it just betrayed you.</p>

    <p>But then — just then — something clicks. You fix the bug. You beat the error. And the dopamine hit? <strong>Stronger than any viral TikTok.</strong> That’s the kind of high that builds devs, not copy-pasting some magic snippet from StackOverflow you don’t even understand.</p>

    <h3>Offline Mode = Training Arc</h3>

    <p>Working offline is like putting on weighted clothes in an anime. You suffer, yes. But when you do get access to the internet again, you're a different breed. You don’t panic at errors. You think deeper. You write cleaner code. You even start naming your variables properly (okay, maybe not always).</p>

    <p>Sure, there are moments I wish I had internet. Maybe to Google a bug. Or, let’s be honest, to rewatch Messi highlights for the 100th time. But in this weird way, not having internet has made me a better dev. A more focused one. A more angry one sometimes, sure... but still better.</p>

    <h3>Should You Try It?</h3>

    <p>Yes. For a day or two, go full monk mode. No internet. Just code. Let the silence mock you while you try to figure out why the loop won’t break. It’s painful, but it’s powerful.</p>

    <p>Internet is a beautiful thing — I mean, I’d sell a kidney to stream some Netflix right now. But learning to code without it every now and then? <strong>That’s a superpower.</strong></p>

    <h3>Final Thoughts</h3>

    <p>So yeah, I may not have constant internet access, but I’ve got drive, focus, and some very aggressive <code>console.log</code>s. Offline Zigla is still beast mode Zigla. And when midnight hits and I steal Mom’s phone for a quick Google search?<br />
    That’s just called balance. 😌</p>
  `,
  },
];

export default blogs;
