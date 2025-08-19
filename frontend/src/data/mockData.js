export const stories = [
  { username: 'reactdev', img: 'https://placehold.co/64x64/61DAFB/FFFFFF?text=R' },
  { username: 'pythonista', img: 'https://placehold.co/64x64/3776AB/FFFFFF?text=PY' },
  { username: 'jsmaster', img: 'https://placehold.co/64x64/F7DF1E/000000?text=JS' },
  { username: 'rustacean', img: 'https://placehold.co/64x64/CE422B/FFFFFF?text=RS' },
  { username: 'gopher', img: 'https://placehold.co/64x64/00ADD8/FFFFFF?text=GO' },
  { username: 'devops_ninja', img: 'https://placehold.co/64x64/326CE5/FFFFFF?text=K8' },
];

export const posts = [
  {
    id: 1,
    username: 'fullstack_dev',
    profileImg: 'https://placehold.co/32x32/61DAFB/FFFFFF?text=FS',
    location: 'San Francisco, CA',
    postImg: 'https://placehold.co/600x750/1e1e1e/00ff00?text=const+app+=+()+=>{%0A++return+(%0A++++<div>Hello+World</div>%0A++);%0A};',
    likes: 2847,
    caption: 'Just shipped my first React app! 🚀 Clean code is the best code. #ReactJS #WebDev',
    comments: [
      { username: 'code_reviewer', text: 'Clean component structure! 👌' },
      { username: 'junior_dev', text: 'How did you handle state management?' }
    ],
    time: '2 HOURS AGO'
  },
  {
    id: 2,
    username: 'python_wizard',
    profileImg: 'https://placehold.co/32x32/3776AB/FFFFFF?text=PY',
    location: 'Remote',
    postImg: 'https://placehold.co/600x600/0d1117/f85149?text=def+fibonacci(n):%0A++++if+n+<=+1:%0A++++++++return+n%0A++++return+fibonacci(n-1)+%2B+fibonacci(n-2)',
    likes: 1654,
    caption: 'Optimizing algorithms at 2 AM hits different 💻 Who else loves the recursive beauty of Fibonacci? #Python #Algorithms',
    comments: [
      { username: 'algo_master', text: 'Try memoization for better performance!' }
    ],
    time: '5 HOURS AGO'
  },
  {
    id: 3,
    username: 'devops_guru',
    profileImg: 'https://placehold.co/32x32/326CE5/FFFFFF?text=K8',
    location: 'Cloud ☁️',
    postImg: 'https://placehold.co/600x700/f6f8fa/24292f?text=apiVersion:+apps/v1%0Akind:+Deployment%0Ametadata:%0A++name:+my-app%0Aspec:%0A++replicas:+3%0A++selector:%0A++++matchLabels:%0A++++++app:+my-app',
    likes: 3421,
    caption: 'Kubernetes deployment looking clean! 🐳 Zero downtime deployments are a thing of beauty. #DevOps #Kubernetes #Docker',
    comments: [
      { username: 'sre_engineer', text: 'Love the resource limits setup!' },
      { username: 'cloud_architect', text: 'Which ingress controller are you using?' },
      { username: 'docker_fan', text: 'Container orchestration at its finest 🔥' }
    ],
    time: '1 DAY AGO'
  }
];

export const reels = [
  {
    id: 1,
    username: 'code_speedrun',
    profileImg: 'https://placehold.co/40x40/FF6B6B/FFFFFF?text=CS',
    videoUrl: 'https://placehold.co/400x700/1e1e1e/00ff41?text=Building+a+REST+API%0Ain+60+seconds!%0A%0A⚡+Express.js%0A⚡+MongoDB%0A⚡+JWT+Auth',
    caption: 'Building a full REST API in 60 seconds! ⚡ #coding #webdev #speedrun',
    likes: '847K',
    comments: '12.4K',
    shares: '28.1K'
  },
  {
    id: 2,
    username: 'debug_master',
    profileImg: 'https://placehold.co/40x40/4ECDC4/FFFFFF?text=DM',
    videoUrl: 'https://placehold.co/400x700/0d1117/f85149?text=console.log("debugging")%0A%0AWhen+you+find+the+bug%0Aafter+3+hours...%0A%0A🐛➡️💀',
    caption: 'The satisfaction of fixing that one bug that kept you up all night 😅 #debugging #programming',
    likes: '1.2M',
    comments: '8,932',
    shares: '15.6K'
  },
  {
    id: 3,
    username: 'ai_enthusiast',
    profileImg: 'https://placehold.co/40x40/9B59B6/FFFFFF?text=AI',
    videoUrl: 'https://placehold.co/400x700/f6f8fa/24292f?text=import+tensorflow+as+tf%0A%0ATraining+my+first%0Aneural+network!%0A%0A🤖+Machine+Learning%0A📊+Data+Science',
    caption: 'Training my first neural network! The future is here 🤖 #AI #MachineLearning #TensorFlow',
    likes: '2.1M',
    comments: '18.7K',
    shares: '42.3K'
  }
];