import DisarmItImg from './assets/DisarmIt.jpg'
import DungeonManImg from './assets/DungeonMan.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'SBK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'S. Bharath Krishnan',
  role: 'Game Developer & Graphics Programmer',
  description:(
    <>
      I am a passionate Computer Science engineer with over 7 years of experience specializing in <strong>game development</strong> and <strong>graphics programming</strong>. Skilled in <strong>Unity (C#)</strong>, <strong>shader programming</strong>, <strong>procedural generation</strong>, and <strong>2D/3D game engine development</strong>, I have built and optimized interactive, visually compelling games and engine components. My expertise includes <strong>real-time rendering</strong>, <strong>lighting models</strong>, <strong>particle systems</strong>, and <strong>performance optimization</strong> using both high-level scripting and low-level graphics techniques in <strong>GLSL</strong> and <strong>modern C++</strong>. I have led game development communities, organized <strong>game jams</strong>, and mentored peers, continuously pushing creative and technical boundaries to deliver polished, scalable, and immersive gaming experiences.
    </>
  ),
  resume: 'https://www.overleaf.com/read/tsrmmbmpgmsf#f058a6',
  social: {
    linkedin: 'https://www.linkedin.com/in/bharath-krishnan-119915211/',
    github: 'https://github.com/Bharath33-Krishnan',
    itch: 'https://bharathk33.itch.io/'
  },
}


const games = [
  {
    name: 'Dungeon Man (2024)',
    content: (
      <div className='iframe-container'>
        <img
          alt='Dungeon Man'
          max-height='1200px'
          height='100%'
          src={DungeonManImg}
          title='Disarm It Img'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
      </div>
    ),
    description: (
      <>
        <div className='portfolio-entry' style={{ textAlign: 'left' }}>
          <p>
            <strong>Dungeon Man</strong> is a survival horror reinterpretation
            of the classic arcade game <em>Pac-Man</em>, developed for the IGDC
            x WTF Game Jam 2024. Built by a team of four, the game follows Jack,
            a curious boy exploring the haunted Blackwood Manor. The twist:
            Jack’s torch offers only limited—and shrinking—visibility, while
            spectral entities patrol the manor. One type of ghost actively hunts
            Jack, while the other guards electric cells used to recharge the
            dying torch. Players rely on reflexes, resource management, and a
            directional radar system to survive each increasingly dark level.
          </p>
          <p>
            I took on both technical and leadership responsibilities in this
            project. From designing enemy behavior to integrating visual/audio
            elements, I ensured all systems worked harmoniously. My key
            contributions included:
          </p>
          <ul className='portfolio-list'>
            <li>
              <strong>Ghost AI System:</strong> Developed a vector-based
              probabilistic movement model for ghosts targeting Jack and energy
              cells.
            </li>
            <li>
              <strong>Player Controller & Lighting:</strong> Engineered Jack’s
              movement system and dynamic flashlight logic with gradually
              shrinking visibility.
            </li>
            <li>
              <strong>Team Integration:</strong> As the most experienced Unity
              developer, I led system coordination and ensured smooth
              collaboration across art, level design, and gameplay layers.
            </li>
          </ul>
        </div>
      </>
    ),
    stack: ['Unity', 'C#'],
    livePreview: 'https://bharathk33.itch.io/dungeon-man',
  },
  {
    name: 'Funky Blueprints (2024)',
    content: (
      <div className='iframe-container'>
        <iframe
          max-height='1200px'
          height='100%'
          src='https://www.youtube.com/embed/QuP8OgCKnaM?si=ygK62cTdX9dZ3N9F'
          title='Funky Blueprints YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
      </div>
    ),
    description: (
      <>
        <div className='portfolio-entry' style={{ textAlign: 'left' }}>
          <p>
            <strong>Funky Blueprints</strong> is a physics-based puzzle game
            developed in one week during a game jam hosted by{' '}
            <strong>IIT Palakkad</strong>, where it won{' '}
            <strong>2nd place</strong>. Based on the theme{' '}
            <strong>&quot;Metamorphosis&quot;</strong>, the game challenges
            players to draw structures with distinct physical behaviors—static,
            rotating (at various speeds), and joint-connected—to guide a heart
            to its destination through creative contraptions. Despite being my
            first time using the <strong>Godot Engine</strong>, my prior
            experience with Unity allowed me to quickly adapt and contribute
            effectively within a four-person team.
          </p>
          <p>
            <strong>Key Contributions:</strong>
          </p>
          <ul className='portfolio-list'>
            <li>
              <strong>Stroke Collision System</strong>: Implemented an algorithm
              to analyze drawn strokes (represented as vectors of points) and
              generate capsule colliders based on curvature—using a single
              collider for smooth segments and multiple for sharper bends.
            </li>
            <li>
              <strong>Joint Management System</strong>: Designed and implemented
              data structures to dynamically create and safely delete joints
              between drawn structures without compromising game stability.
            </li>
          </ul>
        </div>
      </>
    ),
    stack: ['Godot', 'GDScript'],
    livePreview: 'https://bharathk33.itch.io/funkyblueprints',
  },
  {
    name: 'Disarm It (2020)',
    content: (
      <div className='iframe-container'>
        <img
          alt='Disarm It'
          max-height='1200px'
          height='100%'
          src={DisarmItImg}
          title='Disarm It Img'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
      </div>
    ),
    description: (
      <>
        <div className='portfolio-entry' style={{ textAlign: 'left' }}>
          <p>
            <strong>Disarm It</strong> is a high-pressure time-attack game
            created for the GMTK Game Jam 2020. Developed in{' '}
            <strong>Unity</strong>, it marked my first foray into game jams and
            procedural generation. The core gameplay revolves around driving a
            car that must obey dynamically generated rules—such as &quot;always
            drive backward&quot—to prevent an onboard bomb from detonating.
            Obstacles are generated randomly and increase in frequency as the
            timer ticks down, adding to the chaotic tension.
          </p>

          <p>
            As a solo project, <em>Disarm It</em> helped me explore fundamental
            procedural generation, car physics, and rule systems. The game
            featured hand-drawn UI elements made in MS Paint, quirky
            physics-based controls, and a randomized rule engine that enforced
            unique driving constraints per run. It ranked{' '}
            <strong>1563 / 5267</strong> entries in the jam and stands as an
            unforgettable milestone in my game development journey.
          </p>
        </div>
      </>
    ),
    stack: ['Unity', 'C#'],
    livePreview: 'https://bharathk33.itch.io/disarmit',
  },
  {
    name: 'Duel (2022)',
    content: (
      <div className='iframe-container'>
        <iframe
          max-height='1200px'
          height='100%'
          src='https://www.youtube.com/embed/j0TNKrEShGs?si=6SBqW36uhfpPeb_Y'
          title='Duel YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
      </div>
    ),
    description: (
      <>
        <div className='portfolio-entry' style={{ textAlign: 'left' }}>
          <p>
            <strong>Duel</strong> is a 2D strategy defense game made in Unity.
            Originally started for a game jam, it evolved into a month-long solo
            project exploring themes of loneliness and self-control. You play as
            Job, a villager cursed to become a vampire. During the day, you
            strategically place limited defenses across homes. At night, the
            vampire emerges and attacks, forcing you to face the consequences of
            your own defense placements. Each villager death raises suspicion,
            and if the meter fills, your secret is exposed and the game ends.
          </p>
          <p>
            The game was my first proper implementation of{' '}
            <strong>object-oriented programming</strong> in game development. I
            designed a modular defense system with polymorphic behaviors for
            each weapon type. Alongside code, I created all 2D art using{' '}
            <strong>GraphicsGale</strong> and co-wrote the story. Key mechanics
            include:
          </p>
          <ul className='portfolio-list'>
            <li>
              <strong>Defense Management System</strong> – place and remove
              defenses with limited inventory tracking
            </li>
            <li>
              <strong>Day-Night Cycle System</strong> – animated transitions,
              custom sound design, and transformation effects
            </li>
            <li>
              <strong>Enemy AI</strong> – lane-based attack logic targeting the
              weakest houses first
            </li>
            <li>
              <strong>Suspicion Mechanic</strong> – increasing difficulty based
              on strategic failure
            </li>
          </ul>
        </div>
      </>
    ),
    stack: ['Unity', 'C#', 'GraphicsGale'],
    livePreview: 'https://bharathk33.itch.io/duel',
  },
]


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Procedural Shaders',
    CarouselContent:[
      { type: 'iframe', src: 'https://www.youtube.com/embed/DRBvbl4j-4E?si=F-tTYO5K_NpsxHfK&amp;start=10', title: 'Vine Shader' },
      { type: 'iframe', src: 'https://www.shadertoy.com/embed/lXK3D3?gui=true&t=10&paused=true&muted=false', title: 'Scales Of Randomness' },
      { type: 'iframe', src: 'https://www.shadertoy.com/embed/t32SDW?gui=true&t=10&paused=true&muted=false', title: 'Shooting Stars' },
    ],
    description: (
      <div className='portfolio-entry' style={{ textAlign: 'left' }}>
        <p>
          As a natural extension of my passion for game development, I’ve developed a deep love for <strong>shader art</strong> and <strong>procedural visuals</strong>. Whether experimenting with <strong>UV distortion, fract functions</strong> in Shadertoy, or building visual pipelines in <strong>Unity’s Shader Graph</strong>, each creation has offered new insights into the beauty of real-time rendering.
        </p>
        <p>
          From algorithmically generated vines to accidental artifacts of randomness, every shader has been both a learning experience and a creative outlet. Here&apos;s a glimpse into some of my favorite works:
        </p>
        <ul className='portfolio-list'>
          <li><strong>Procedural Vine Shader</strong> – Built in Unity Shader Graph, simulates growth behavior along arbitrary paths.</li>
          <li><strong>Scales of Randomness</strong> – A surprising pattern that emerged from UV manipulations and fract logic, posted on Shadertoy.</li>
          <li><strong>Shooting Stars</strong> – A mesmerizing particle flow representing stars in a perpetual fall, one of my most polished Shadertoy pieces.</li>
        </ul>
      </div>
    ),
    stack: ['ShaderGraph', 'GLSL', 'Shadertoy', 'Unity'],
  },
  {
    name: 'Procedural Music Visualization',
    CarouselContent:[
      { type: 'iframe', src: 'https://www.youtube.com/embed/DWNN5HCaRFQ?si=b7Wgazi2fGsYc1sv', title: 'Planet Music Visualizer' },
      { type: 'iframe', src: 'https://www.shadertoy.com/embed/clGBWR?gui=true&paused=true&muted=false', title: 'Scales Of Randomness' },
    ],
    description:(      
    <div className='portfolio-entry' style={{ textAlign: 'left' }}>
        <p>
          Combining my love for audio and real-time rendering, I’ve explored <strong>music visualization</strong> through both <strong>Unity</strong> and <strong>Shadertoy</strong>. These projects allowed me to blend rhythm, motion, and graphics into expressive, reactive visuals.
        </p>
        <p>
          From audio-reactive planets to frequency-driven distortions, each project was a deep dive into how sound can shape visuals. Here’s a glimpse into two of my favorite experiments:
        </p>
        <ul className='portfolio-list'>
          <li>
            <strong>Unity Music Visualizer</strong> – Inspired by Sebastien Lague’s procedural terrain generation. This project uses mesh deformation techniques driven by live audio spectra to animate an otherworldly terrain reacting in real-time.
          </li>
          <li>
            <strong>(Shadertoy) Music Visualizer</strong> – A minimal shader experiment where polar UV transformations create a pulsing pattern synchronized with beats.
          </li>
        </ul>
    </div>
    ),
    stack: ['ShaderGraph', 'GLSL', 'Shadertoy', 'Unity'],
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Unity Engine',
  'C#',
  'Playmaker',
  'C/C++',
  'Raylib',
  'OpenGL',
  'GLSL',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next JS',
  'Express JS',
  'Flask',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bharathkrishnan33@gmail.com',
}

export { header, about, games,projects, skills, contact }
