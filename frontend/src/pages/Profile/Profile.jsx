export default function Profile() {
  const userStats = {
    followers: 1,
    following: 1,
    repositories: 7,
    starred: 14,
    organizations: 0,
    projects: 2
  };

  // Generate 17x7 contribution grid (119 blocks for ~4 months)
  const generateContributionGrid = () => {
    const blocks = [];
    for (let week = 0; week < 17; week++) {
      for (let day = 0; day < 7; day++) {
        const intensity = Math.random();
        let level = 0;
        if (intensity > 0.8) level = 4;
        else if (intensity > 0.6) level = 3;
        else if (intensity > 0.4) level = 2;
        else if (intensity > 0.2) level = 1;

        blocks.push({
          week,
          day,
          level,
          contributions: Math.floor(Math.random() * 15)
        });
      }
    }
    return blocks;
  };

  const contributionBlocks = generateContributionGrid();

  const getContributionColor = (level) => {
    switch (level) {
      case 0: return '#ebedf0';
      case 1: return '#9be9a8';
      case 2: return '#40c463';
      case 3: return '#30a14e';
      case 4: return '#216e39';
      default: return '#ebedf0';
    }
  };

  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor: '#ccdbd9' }}>
      {/* Profile Header */}
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://placehold.co/80x80/6B7280/FFFFFF?text=ME"
            className="w-20 h-20 rounded-full"
            alt="Profile"
          />
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-900">jagadeeshwaran p s</h1>
            <p className="text-gray-600 text-sm">jagainc • he/him</p>
          </div>
          <button className="p-2 text-gray-600 bg-white rounded-lg hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </button>
        </div>

        {/* Status */}
        <div className="flex items-center space-x-2 mb-4 p-3 bg-white rounded-lg border border-gray-200">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-xs">😊</span>
          </div>
          <span className="text-gray-700 text-sm">just a everyday normal guy</span>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-gray-700 text-sm">in/jagadeeshwaran-p-s</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span><span className="text-gray-900 font-semibold">{userStats.followers}</span> follower</span>
            <span><span className="text-gray-900 font-semibold">{userStats.following}</span> following</span>
          </div>
        </div>

        {/* Achievement */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-xs">🏆</span>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Repositories</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">{userStats.repositories}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Starred</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">{userStats.starred}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Organizations</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">{userStats.organizations}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">{userStats.projects}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-900 font-medium">Contributions</h3>
            <span className="text-gray-600 text-sm">Last 4 months</span>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="grid grid-rows-7 grid-flow-col gap-1 mb-3" style={{ gridTemplateColumns: 'repeat(17, 1fr)' }}>
              {contributionBlocks.map((block, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: getContributionColor(block.level) }}
                  title={`${block.contributions} contributions`}
                ></div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Less</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#ebedf0' }}></div>
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#9be9a8' }}></div>
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#40c463' }}></div>
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#30a14e' }}></div>
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#216e39' }}></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Popular Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
            </svg>
            <span className="text-gray-600 font-medium">Popular</span>
          </div>

          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex items-start space-x-3">
                <img
                  src="https://placehold.co/32x32/6B7280/FFFFFF?text=JA"
                  className="w-8 h-8 rounded-full"
                  alt="jagainc"
                />
                <div className="flex-1">
                  <h4 className="text-gray-900 font-medium">jagainc</h4>
                  <p className="text-gray-600 text-sm">Config files for my GitHub profile.</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                      </svg>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}