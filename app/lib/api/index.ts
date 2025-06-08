// API-like functions to fetch data
import apiData from './data.json';

// Simulate API delay
const delay = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms));

// Types
export interface Product {
  id: string;
  image: string;
  images?: string[];
  name?: string;
  title: string;
  price: string | number;
  originalPrice?: number;
  category: string;
  featured: boolean;
  description?: string;
  features?: string[];
  inStock?: boolean;
}

export interface Service {
  icon: string;
  text: string;
}

export interface Blog {
  id: string;
  image: string;
  date: string;
  title: string;
  description: string;
  excerpt?: string;
  content?: string;
  slug: string;
  category: string;
  readTime?: string;
  tags?: string[];
}

// BlogPost alias for consistency
export type BlogPost = Blog;

export interface Category {
  id: string;
  icon: string;
  label: string;
  link: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  link: string;
  hasDropdown: boolean;
}

export interface FooterLink {
  text: string;
  link: string;
}

export interface FooterSection {
  title: string;
  items?: FooterLink[];
}

export interface ContactInfo {
  phone: string;
  mobile: string[];
  email: string;
  address: string;
}

export interface AppInfo {
  name: string;
  description: string;
  logo: string;
  copyright: string;
}

export interface HeaderData {
  auth: { text: string; link: string };
  contact: { phone: string; icon: string };
  tracking: { text: string; icon: string; link: string };
  navigation: NavigationItem[];
}

export interface HeroData {
  title: string;
  description: string;
  cta: { text: string; link: string };
  background: string;
}

export interface GiftData {
  title: string;
  description: string;
  cta: { text: string; link: string };
  images: {
    beans: string;
    mug: string;
    coffee: string;
    box: string;
  };
}

export interface StoryData {
  title: string;
  content: string;
  image: string;
  cta: { text: string; link: string };
}

export interface FooterData {
  brand: {
    name: string;
    description: string;
    logo: string;
  };
  contact: {
    title: string;
    phones: string[];
    email: string;
    address: string;
  };
  quickLinks: {
    title: string;
    links: { text: string; url: string }[];
  };
  services: {
    title: string;
    links: { text: string; url: string }[];
  };
  socialMedia: { name: string; icon: string; url: string }[];
  paymentBrands: { name: string; image: string }[];
  copyright: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface AboutPageData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  story: {
    title: string;
    subtitle: string;
    content: string[];
    image: string;
    quote: {
      text: string;
      author: string;
      icon: string;
    };
  };
  vision: {
    title: string;
    content: string[];
    images: string[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
}

export interface PageHeroData {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs?: string[];
}

export interface ContactCard {
  id: string;
  icon: string;
  title: string;
  content: string[];
  alt: string;
}

export interface ContactPageData {
  hero: PageHeroData;
  cards: ContactCard[];
}

export interface ProductWeight {
  value: string;
  label: string;
  price: string;
}

export interface SingleProductData {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  img: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  description: string;
  features: string[];
  weights: ProductWeight[];
}

export interface RelatedProduct {
  name: string;
  price: string;
  image: string;
}

export interface SingleProductPageData {
  product: SingleProductData;
  relatedProducts: RelatedProduct[];
}

export interface RelatedPost {
  id: string;
  title: string;
  date: string;
  image: string;
}

export interface SingleBlogPost {
  id: string;
  title: string;
  date: string;
  writer: string;
  author: string;
  image: string;
  content: string;
}

export interface SingleBlogPageData {
  post: SingleBlogPost;
  relatedPosts: RelatedPost[];
}

// API Functions
export const api = {
  // App information
  async getAppInfo(): Promise<AppInfo> {
    await delay();
    return apiData.app;
  },

  // Header data
  async getHeaderData(): Promise<HeaderData> {
    await delay();
    return apiData.header;
  },

  // Hero section data
  async getHeroData(): Promise<HeroData> {
    await delay();
    return apiData.hero;
  },

  // Categories
  async getCategories(): Promise<{ title: string; items: Category[] }> {
    await delay();
    return apiData.categories;
  },

  // Gift section data
  async getGiftData(): Promise<GiftData> {
    await delay();
    return apiData.gift;
  },

  // Story section data
  async getStoryData(): Promise<StoryData> {
    await delay();
    return apiData.story;
  },

  // Services
  async getServices(): Promise<Service[]> {
    await delay();
    return apiData.services;
  },

  // Products
  async getProducts(category?: string, featured?: boolean): Promise<Product[]> {
    await delay();
    let products = [...apiData.products, ...apiData.machines, ...apiData.coffeeStuff];
    
    if (category) {
      products = products.filter(p => p.category === category);
    }
    
    if (featured !== undefined) {
      products = products.filter(p => p.featured === featured);
    }
    
    return products;
  },

  // Coffee products specifically
  async getCoffeeProducts(): Promise<Product[]> {
    await delay();
    return apiData.products;
  },

  // Machines specifically
  async getMachines(): Promise<Product[]> {
    await delay();
    return apiData.machines;
  },

  // Coffee equipment specifically
  async getCoffeeStuff(): Promise<Product[]> {
    await delay();
    return apiData.coffeeStuff;
  },

  // Blogs
  async getBlogs(category?: string): Promise<Blog[]> {
    await delay();
    if (category) {
      return apiData.blogs.filter(blog => blog.category === category);
    }
    return apiData.blogs;
  },

  // Product slider titles
  async getProductSliderTitles(): Promise<typeof apiData.productSliders> {
    await delay();
    return apiData.productSliders;
  },
  // Footer data
  async getFooterData(): Promise<typeof apiData.footer> {
    await delay();
    return apiData.footer;
  },

  // Contact information
  async getContactInfo(): Promise<ContactInfo> {
    await delay();
    return apiData.contact;
  },

  // Single product by ID
  async getProductById(id: string): Promise<Product | null> {
    await delay();
    const allProducts = [...apiData.products, ...apiData.machines, ...apiData.coffeeStuff];
    return allProducts.find(p => p.id === id) || null;
  },

  // Single blog by ID or slug
  async getBlogBySlug(slug: string): Promise<Blog | null> {
    await delay();
    return apiData.blogs.find(blog => blog.slug === slug) || null;
  },

  // Search functionality
  async searchProducts(query: string): Promise<Product[]> {
    await delay();
    const allProducts = [...apiData.products, ...apiData.machines, ...apiData.coffeeStuff];
    const lowercaseQuery = query.toLowerCase();
    
    return allProducts.filter(product => 
      product.title.toLowerCase().includes(lowercaseQuery)
    );
  }
};

// Individual function exports for easier importing
export const getHeaderData = api.getHeaderData;
export const getHeroData = api.getHeroData;
export const getCategories = api.getCategories;
export const getGiftData = api.getGiftData;
export const getStoryData = api.getStoryData;
export const getServices = api.getServices;
export const getProducts = api.getProducts;
export const getCoffeeProducts = api.getCoffeeProducts;
export const getMachines = api.getMachines;
export const getCoffeeStuff = api.getCoffeeStuff;
export const getBlogs = api.getBlogs;

// Footer data with proper transformation
export const getFooterData = async (): Promise<FooterData> => {
  await delay();
  return {
    brand: {
      name: apiData.app.name,
      description: apiData.app.description,
      logo: apiData.app.logo,
    },
    contact: {
      title: apiData.footer.sections.contactInfo.title,
      phones: [apiData.contact.phone, ...apiData.contact.mobile],
      email: apiData.contact.email,
      address: apiData.contact.address,
    },
    quickLinks: {
      title: apiData.footer.sections.quickLinks.title,
      links: apiData.footer.sections.quickLinks.items.map(item => ({
        text: item.text,
        url: item.link,
      })),
    },
    services: {
      title: apiData.footer.sections.helpServices.title,
      links: apiData.footer.sections.helpServices.items.map(item => ({
        text: item.text,
        url: item.link,
      })),
    },
    socialMedia: apiData.footer.social.map(social => ({
      name: social.name,
      icon: social.icon,
      url: social.link,
    })),
    paymentBrands: apiData.footer.paymentBrands.map(brand => ({
      name: brand.name,
      image: brand.image,
    })),
    copyright: apiData.app.copyright,
  };
};

// About page data
export const getAboutPageData = async (): Promise<AboutPageData> => {
  await delay();
  return apiData.pages.about;
};

// Blog page hero data
export const getBlogPageHero = async (): Promise<PageHeroData> => {
  await delay();
  return apiData.pages.blog.hero;
};

// Store page hero data
export const getStorePageHero = async (): Promise<PageHeroData> => {
  await delay();
  return apiData.pages.store.hero;
};

// Contact page data
export const getContactPageData = async (): Promise<ContactPageData> => {
  await delay();
  return apiData.pages.contact;
};

// Single product page data
export const getSingleProductData = async (): Promise<SingleProductPageData> => {
  await delay();
  return apiData.pages.singleProduct;
};

// Single blog page data
export const getSingleBlogData = async (): Promise<SingleBlogPageData> => {
  await delay();
  return apiData.pages.singleBlog;
};

// Get single product by ID
export const getProductById = async (id: string): Promise<Product | null> => {
  await delay(500);
  const allProducts = [...apiData.products, ...apiData.machines, ...apiData.coffeeStuff];
  return allProducts.find(p => p.id === id) || null;
};

// Get similar products
export const getSimilarProducts = async (productId: string, limit: number = 4): Promise<Product[]> => {
  await delay(300);
  const allProducts = [...apiData.products, ...apiData.machines, ...apiData.coffeeStuff];
  const currentProduct = allProducts.find(p => p.id === productId);
  
  if (!currentProduct) return [];
  
  // Get products from same category
  const similarProducts = allProducts
    .filter(p => p.id !== productId && p.category === currentProduct.category)
    .slice(0, limit);
  
  return similarProducts;
};

// Get single blog by ID
export const getBlogById = async (id: string): Promise<Blog | null> => {
  await delay(500);
  return apiData.blogs.find(b => b.id === id) || null;
};

// Get related blogs
export const getRelatedBlogs = async (blogId: string, limit: number = 3): Promise<Blog[]> => {
  await delay(300);
  const currentBlog = apiData.blogs.find(b => b.id === blogId);
  
  if (!currentBlog) return [];
  
  // Get blogs from same category
  const relatedBlogs = apiData.blogs
    .filter(b => b.id !== blogId && b.category === currentBlog.category)
    .slice(0, limit);
  
  return relatedBlogs;
};

export default api;
