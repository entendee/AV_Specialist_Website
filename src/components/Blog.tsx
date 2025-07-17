import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Samsung Frame TV Installation: Complete Guide to Recessed Mounting',
      excerpt: 'Learn everything about installing Samsung Frame TVs with custom recessed boxes for that perfect flush-wall appearance.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Mike Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Installation Guide'
    },
    {
      id: 2,
      title: 'Home Theater Design Trends 2024: What\'s Hot This Year',
      excerpt: 'Discover the latest trends in home theater design, from immersive audio to smart lighting integration.',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Design Trends'
    },
    {
      id: 3,
      title: 'Choosing the Right Frame TV Size for Your Space',
      excerpt: 'A comprehensive guide to selecting the perfect Samsung Frame TV size based on room dimensions and viewing distance.',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Rodriguez',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Buying Guide'
    },
    {
      id: 4,
      title: 'Multi-Room Audio Systems: Everything You Need to Know',
      excerpt: 'Transform your entire home with synchronized audio. Learn about the latest multi-room audio technologies.',
      image: 'https://images.pexels.com/photos/5998117/pexels-photo-5998117.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Chen',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Audio Systems'
    },
    {
      id: 5,
      title: 'Smart Home Integration: Connecting Your Entertainment System',
      excerpt: 'Learn how to integrate your Frame TV and audio systems with popular smart home platforms.',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Mike Johnson',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Smart Home'
    },
    {
      id: 6,
      title: 'Maintenance Tips for Your Frame TV Installation',
      excerpt: 'Keep your Samsung Frame TV looking and performing its best with these professional maintenance tips.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Rodriguez',
      date: '2023-12-15',
      readTime: '4 min read',
      category: 'Maintenance'
    }
  ];

  const categories = [
    'All Posts',
    'Installation Guide',
    'Design Trends',
    'Buying Guide',
    'Audio Systems',
    'Smart Home',
    'Maintenance'
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, installation guides, and the latest trends in home theater and audio
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">{blogPosts[0].author}</p>
                        <p className="text-sm text-gray-600">Lead Technician</p>
                      </div>
                    </div>
                    
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;