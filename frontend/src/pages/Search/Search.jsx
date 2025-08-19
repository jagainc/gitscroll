import { useApp } from '../../context/AppContext';
import { useState, useEffect } from 'react';

export default function Search() {
  const { dispatch } = useApp();
  const [gridItems, setGridItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showExplore, setShowExplore] = useState(true);

  const handleReelsClick = () => {
    dispatch({ type: 'SET_VIEW', payload: 'reels' });
  };

  // Mock users data
  const mockUsers = [
    {
      id: 1,
      username: 'sarah_codes',
      name: 'Sarah Johnson',
      avatar: 'https://placehold.co/64x64/3498DB/FFFFFF?text=SJ',
      bio: 'Full-stack developer passionate about React and Node.js',
      followers: 1247,
      following: 89,
      repositories: 42,
      verified: true,
      posts: [
        { id: 1, content: 'Just shipped a new React component library! 🚀', likes: 234, language: 'React' },
        { id: 2, content: 'Working on microservices architecture with Node.js', likes: 156, language: 'Node.js' }
      ]
    },
    {
      id: 2,
      username: 'python_guru',
      name: 'Alex Chen',
      avatar: 'https://placehold.co/64x64/3776AB/FFFFFF?text=AC',
      bio: 'ML Engineer | Python enthusiast | Building AI solutions',
      followers: 2341,
      following: 156,
      repositories: 67,
      verified: false,
      posts: [
        { id: 3, content: 'New machine learning model achieved 94% accuracy!', likes: 445, language: 'Python' },
        { id: 4, content: 'TensorFlow vs PyTorch: My thoughts after 2 years', likes: 678, language: 'Python' }
      ]
    },
    {
      id: 3,
      username: 'js_ninja',
      name: 'Mike Rodriguez',
      avatar: 'https://placehold.co/64x64/F7DF1E/000000?text=MR',
      bio: 'JavaScript wizard | Open source contributor | Vue.js core team',
      followers: 3456,
      following: 234,
      repositories: 89,
      verified: true,
      posts: [
        { id: 5, content: 'Vue 3 Composition API best practices', likes: 567, language: 'Vue' },
        { id: 6, content: 'Building performant SPAs with modern JavaScript', likes: 789, language: 'JavaScript' }
      ]
    },
    {
      id: 4,
      username: 'rust_dev',
      name: 'Emma Wilson',
      avatar: 'https://placehold.co/64x64/CE422B/FFFFFF?text=EW',
      bio: 'Systems programmer | Rust evangelist | WebAssembly explorer',
      followers: 987,
      following: 67,
      repositories: 34,
      verified: false,
      posts: [
        { id: 7, content: 'Memory safety in Rust: Why it matters', likes: 345, language: 'Rust' },
        { id: 8, content: 'WebAssembly performance benchmarks', likes: 234, language: 'Rust' }
      ]
    },
    {
      id: 5,
      username: 'docker_master',
      name: 'David Kim',
      avatar: 'https://placehold.co/64x64/2496ED/FFFFFF?text=DK',
      bio: 'DevOps Engineer | Docker Captain | Kubernetes enthusiast',
      followers: 1876,
      following: 123,
      repositories: 56,
      verified: true,
      posts: [
        { id: 9, content: 'Container orchestration best practices', likes: 456, language: 'Docker' },
        { id: 10, content: 'Zero-downtime deployments with Kubernetes', likes: 567, language: 'Kubernetes' }
      ]
    }
  ];

  // Expanded code templates for variety
  const codeTemplates = [
    { code: 'const fibonacci = (n) => {\n  if (n <= 1) return n;\n  return fibonacci(n-1) + fibonacci(n-2);\n};', lang: 'JavaScript' },
    { code: 'def hello():\n    print("Hello World")', lang: 'Python' },
    { code: 'SELECT * FROM users\nWHERE active = true\nORDER BY created_at DESC;', lang: 'SQL' },
    { code: 'git add . && git commit -m "fix: bug"', lang: 'Git' },
    { code: 'import React from "react";\n\nconst App = () => {\n  return <div>Hello</div>;\n};', lang: 'React' },
    { code: 'docker run -d \\\n  --name app \\\n  -p 3000:3000 \\\n  myapp:latest', lang: 'Docker' },
    { code: 'npm install react', lang: 'NPM' },
    { code: 'func main() {\n    fmt.Println("Hello, Go!")\n}', lang: 'Go' },
    { code: 'curl -X GET \\\n  https://api.github.com', lang: 'cURL' },
    { code: 'ls -la | grep .js', lang: 'Bash' },
    { code: 'interface User {\n  id: number;\n  name: string;\n}', lang: 'TypeScript' },
    { code: 'apiVersion: v1\nkind: Pod\nmetadata:\n  name: app', lang: 'Kubernetes' }
  ];

  // Smart grid packing algorithm
  const generateOptimalGrid = () => {
    const TARGET_ITEMS = 60;
    const items = [];
    let itemId = 1;

    // Add reels block first
    items.push({
      id: 'reels',
      type: 'reels',
      size: 'tall'
    });

    // Generate items with smart size distribution
    for (let i = 1; i < TARGET_ITEMS; i++) {
      const template = codeTemplates[Math.floor(Math.random() * codeTemplates.length)];
      const likes = Math.floor(Math.random() * 5000) + 100;
      
      let size;
      const rand = Math.random();
      const position = i % 9;
      
      if (position === 0 && rand < 0.2) {
        size = 'large';
      } else if (position % 3 === 0 && rand < 0.3) {
        size = 'wide';
      } else if (position % 4 === 1 && rand < 0.25) {
        size = 'tall';
      } else {
        size = 'square';
      }

      items.push({
        id: itemId++,
        type: 'code',
        size,
        code: template.code,
        lang: template.lang,
        likes: likes > 1000 ? `${(likes/1000).toFixed(1)}K` : likes.toString()
      });
    }

    return items;
  };

  useEffect(() => {
    const items = generateOptimalGrid();
    setGridItems(items);
  }, []);

  // Search users based on query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowExplore(true);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = mockUsers.filter(user => 
        user.username.toLowerCase().includes(query) ||
        user.name.toLowerCase().includes(query) ||
        user.bio.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
      setShowExplore(false);
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedUser(null);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedUser(null);
    setShowExplore(true);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackToSearch = () => {
    setSelectedUser(null);
  };

  const getBlockClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-2';
      case 'square':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getLangColor = (lang) => {
    const colors = {
      'JavaScript': 'from-yellow-400 to-yellow-600',
      'Python': 'from-blue-400 to-blue-600',
      'React': 'from-cyan-400 to-cyan-600',
      'Go': 'from-cyan-500 to-blue-500',
      'SQL': 'from-orange-400 to-red-500',
      'Docker': 'from-blue-500 to-blue-700',
      'Kubernetes': 'from-blue-600 to-purple-600',
      'TypeScript': 'from-blue-500 to-blue-700',
      'Git': 'from-orange-500 to-red-600',
      'NPM': 'from-red-500 to-red-700',
      'cURL': 'from-green-400 to-green-600',
      'Bash': 'from-gray-600 to-gray-800'
    };
    return colors[lang] || 'from-gray-500 to-gray-700';
  };

  return (
    <div className="pb-20">
      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4" style={{backgroundColor: '#ccdbd9'}}>
        {selectedUser && (
          <button
            onClick={handleBackToSearch}
            className="flex items-center text-gray-700 hover:text-gray-900 mb-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to Search
          </button>
        )}
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search users, developers, accounts..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-gray-600">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
        
        {/* Search Results Count */}
        {searchQuery && !selectedUser && (
          <div className="mt-2 text-sm text-gray-600">
            {searchResults.length} {searchResults.length === 1 ? 'user' : 'users'} found for "{searchQuery}"
          </div>
        )}
      </div>

      {/* Content Area */}
      {selectedUser ? (
        // User Profile View
        <div className="p-4">
          {/* User Header */}
          <div className="bg-white rounded-lg p-6 mb-4 border border-gray-200">
            <div className="flex items-start space-x-4">
              <img 
                src={selectedUser.avatar} 
                className="w-20 h-20 rounded-full" 
                alt={selectedUser.name} 
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-xl font-bold text-gray-900">{selectedUser.name}</h1>
                  {selectedUser.verified && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )}
                </div>
                <p className="text-gray-600 mb-2">@{selectedUser.username}</p>
                <p className="text-gray-700 mb-4">{selectedUser.bio}</p>
                
                <div className="flex space-x-6 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">{selectedUser.repositories}</span>
                    <span className="text-gray-600 ml-1">repositories</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">{selectedUser.followers}</span>
                    <span className="text-gray-600 ml-1">followers</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">{selectedUser.following}</span>
                    <span className="text-gray-600 ml-1">following</span>
                  </div>
                </div>
              </div>
              
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Follow
              </button>
            </div>
          </div>

          {/* User Posts */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
            {selectedUser.posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <img 
                    src={selectedUser.avatar} 
                    className="w-8 h-8 rounded-full" 
                    alt={selectedUser.name} 
                  />
                  <div>
                    <p className="font-semibold text-sm">{selectedUser.username}</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <p className="text-gray-800 mb-3">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {post.language}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="text-sm">{post.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : searchQuery ? (
        // Search Results
        <div className="p-4">
          {searchResults.length > 0 ? (
            <div className="space-y-3">
              {searchResults.map(user => (
                <div 
                  key={user.id}
                  onClick={() => handleUserClick(user)}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <img 
                      src={user.avatar} 
                      className="w-12 h-12 rounded-full" 
                      alt={user.name} 
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{user.name}</h3>
                        {user.verified && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">@{user.username}</p>
                      <p className="text-gray-700 text-sm mt-1">{user.bio}</p>
                      <div className="flex space-x-4 text-xs text-gray-500 mt-2">
                        <span>{user.followers} followers</span>
                        <span>{user.repositories} repos</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
              <p className="text-gray-500 mb-4">
                No developers match your search for "{searchQuery}"
              </p>
              <button
                onClick={clearSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      ) : showExplore ? (
        // Explore Grid (Default View)
        <div className="p-0.5">
          <div className="grid grid-cols-3 gap-0.5 auto-rows-[120px]">
            {gridItems.map((block) => (
              <div
                key={block.id}
                className={`${getBlockClasses(block.size)} relative overflow-hidden cursor-pointer group`}
                onClick={block.type === 'reels' ? handleReelsClick : undefined}
              >
                {block.type === 'reels' ? (
                  // Special Reels Navigation Block
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex flex-col items-center justify-center relative">
                    {/* Film Strip Effect */}
                    <div className="absolute left-1 top-2 bottom-2 w-1 bg-black bg-opacity-20 rounded-full"></div>
                    <div className="absolute right-1 top-2 bottom-2 w-1 bg-black bg-opacity-20 rounded-full"></div>

                    {/* Film Holes */}
                    <div className="absolute left-0.5 flex flex-col justify-evenly h-full py-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-black bg-opacity-30 rounded-full"></div>
                      ))}
                    </div>
                    <div className="absolute right-0.5 flex flex-col justify-evenly h-full py-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-black bg-opacity-30 rounded-full"></div>
                      ))}
                    </div>

                    {/* Play Icon */}
                    <div className="bg-white bg-opacity-20 rounded-full p-3 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21"></polygon>
                      </svg>
                    </div>

                    <span className="text-white font-bold text-sm">Reels</span>
                    <span className="text-white text-xs opacity-80">Watch Code</span>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
                  </div>
                ) : (
                  // Regular Code Block
                  <div className={`w-full h-full bg-gradient-to-br ${getLangColor(block.lang)} p-2 flex flex-col justify-between`}>
                    {/* Code Content */}
                    <div className="flex-1 overflow-hidden">
                      <pre className="text-white text-xs font-mono leading-tight whitespace-pre-wrap break-words">
                        {block.code}
                      </pre>
                    </div>

                    {/* Language Tag & Stats */}
                    <div className="flex justify-between items-end mt-1">
                      <span className="bg-black bg-opacity-30 text-white text-xs px-1.5 py-0.5 rounded text-[10px]">
                        {block.lang}
                      </span>
                      <div className="flex items-center text-white text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="text-[10px]">{block.likes}</span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.35-4.35"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}