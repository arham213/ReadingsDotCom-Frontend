export interface TopRowItem {
    name: string;
    code: number;
  }

  export interface SubCategory {
    name: string;
    code: number;
  }

  export interface CategoryGroup {
    title: string;
    items: SubCategory[];
  }

  export interface MainCategory {
    title: string;
    code: number;
    topRow?: TopRowItem[];
    groups?: CategoryGroup[];
  }

  export const TOP_CATEGORIES: TopRowItem[] = [
        { name: "New Releases", code: 301 },
        { name: "New at Readings", code: 302 },
        { name: "New in Our Publications", code: 303 },
        { name: "Coming Soon (Pre-Order)", code: 304 },
        { name: "International Bestsellers", code: 305 },
        { name: "Bestsellers in Our Publications", code: 306 },
  ]
    

  export const NAVBAR_ITEMS: MainCategory[] = [
    {
      code: 1,
      title: "All Books",
      topRow: [
        { name: "New Releases", code: 301 },
        { name: "New at Readings", code: 302 },
        { name: "New in Our Publications", code: 303 },
        { name: "Coming Soon (Pre-Order)", code: 304 },
        { name: "International Bestsellers", code: 305 },
        { name: "Bestsellers in Our Publications", code: 306 },
      ],
      groups: [
        {
          title: "Popular Categories",
          items: [
            { name: "Bio & Autobiography", code: 101 },
            { name: "Business", code: 102 },
            { name: "Classics", code: 103 },
            { name: "Collector's Editions", code: 104 },
            { name: "Fiction", code: 105 },
            { name: "Graphic Novels & Manga", code: 106 },
            { name: "History", code: 107 },
            { name: "Literature", code: 108 },
            { name: "Philosophy", code: 109 },
            { name: "Politics", code: 110 },
            { name: "Religion", code: 111 },
            { name: "Science", code: 112 },
            { name: "Self Help", code: 113 },
          ],
        },
        {
          title: "All Categories",
          items: [
            { name: "Adult Colouring Books", code: 201 },
            { name: "Agriculture", code: 202 },
            { name: "Anthropology", code: 203 },
            { name: "Antiques & Collectibles", code: 204 },
            { name: "Archaeology", code: 205 },
            { name: "Architecture", code: 206 },
            { name: "Art", code: 207 },
            { name: "Audio Books", code: 208 },
            { name: "Automobiles", code: 209 },
            { name: "Aviation", code: 210 },
            { name: "Bio & Autobiography", code: 211 },
            { name: "Body, Mind & Spirit", code: 212 },
            { name: "Business", code: 213 },
            { name: "Children", code: 214 },
            { name: "Classics", code: 215 },
            { name: "Collector's Editions", code: 216 },
            { name: "Coffee Tables", code: 217 },
            { name: "Computer", code: 218 },
            { name: "Cooking", code: 219 },
            { name: "Crafts", code: 220 },
            { name: "Education", code: 221 },
            { name: "Fashion", code: 222 },
            { name: "Fiction", code: 223 },
            { name: "Games & Puzzles", code: 224 },
            { name: "Gardening & Landscaping", code: 225 },
            { name: "Gift Books", code: 226 },
            { name: "Graphic Novels & Manga", code: 227 },
            { name: "Guns", code: 228 },
            { name: "Health & Fitness", code: 229 },
            { name: "History", code: 230 },
            { name: "Home & Interior", code: 231 },
            { name: "Humour", code: 232 },
            { name: "Jewellery", code: 233 },
            { name: "Language", code: 234 },
            { name: "Law", code: 235 },
            { name: "Linguistics", code: 236 },
            { name: "Literary Criticism", code: 237 },
            { name: "Literature", code: 238 },
            { name: "Mass Communication", code: 239 },
            { name: "Media Tie-ins", code: 240 },
            { name: "Medical", code: 241 },
            { name: "Middle Eastern Studies", code: 242 },
            { name: "Mythology & Folklore", code: 243 },
            { name: "Nature", code: 244 },
            { name: "Pakistan Studies", code: 245 },
            { name: "Performing Arts", code: 246 },
            { name: "Pets", code: 247 },
            { name: "Philosophy", code: 248 },
            { name: "Photography", code: 249 },
            { name: "Politics", code: 250 },
            { name: "Psychology", code: 251 },
            { name: "Reference", code: 252 },
            { name: "Religion", code: 253 },
            { name: "Research", code: 254 },
            { name: "Science", code: 255 },
            { name: "Self Help", code: 256 },
            { name: "Sociology", code: 257 },
            { name: "South Asian Studies", code: 258 },
            { name: "Sports", code: 259 },
            { name: "Stationery & Related Items", code: 260 },
            { name: "Study Guides", code: 261 },
            { name: "Transportation", code: 262 },
            { name: "Travel", code: 263 },
            { name: "True Crime", code: 264 },
            { name: "Women Studies", code: 265 },
            { name: "Writing Skills", code: 266 },
            { name: "Young Adults", code: 267 },
          ],
        },
      ],
    },
    { 
      code: 2, 
      title: "Fiction",
      topRow: [
        { name: "Latest Fiction", code: 401 },
        { name: "Award Winners", code: 402 }
      ],
      groups: [
        {
          title: "Genres",
          items: [
            { name: "Romance", code: 403 },
            { name: "Sci-Fi & Fantasy", code: 404 },
            { name: "Mystery & Thrillers", code: 405 },
            { name: "Historical Fiction", code: 406 }
          ]
        }
      ] 
    },
    { 
      code: 3, 
      title: "Non-Fiction",
      topRow: [
        { name: "New Arrivals", code: 501 },
        { name: "Bestsellers", code: 502 }
      ],
      groups: [
        {
          title: "Topics",
          items: [
            { name: "Biography & Memoir", code: 503 },
            { name: "Business & Economics", code: 504 },
            { name: "History", code: 505 },
            { name: "Self-Help", code: 506 }
          ]
        }
      ] 
    },
    { 
      code: 4, 
      title: "Young Adults", 
      groups: [
        {
          title: "Popular Collections",
          items: [
            { name: "YA Fantasy", code: 601 },
            { name: "YA Romance", code: 602 },
            { name: "Coming of Age", code: 603 }
          ]
        }
      ] 
    },
    { 
      code: 5, 
      title: "Children", 
      groups: [
        {
          title: "By Age",
          items: [
            { name: "Ages 0-2 (Toddlers)", code: 701 },
            { name: "Ages 3-5 (Preschool)", code: 702 },
            { name: "Ages 6-8", code: 703 },
            { name: "Ages 9-12", code: 704 }
          ]
        }
      ] 
    },
    { 
      code: 6, 
      title: "Urdu Books", 
      topRow: [
        { name: "New Urdu Releases", code: 801 },
      ],
      groups: [
        {
          title: "Urdu Literature",
          items: [
            { name: "Urdu Fiction", code: 802 },
            { name: "Urdu Poetry", code: 803 },
            { name: "Urdu History", code: 804 },
            { name: "Islamic Books", code: 805 }
          ]
        }
      ] 
    },
    { 
      code: 7, 
      title: "Our Publications", 
      groups: [
        {
          title: "Readings Press",
          items: [
            { name: "Featured Publications", code: 901 },
            { name: "Bestsellers", code: 902 },
            { name: "Upcoming Releases", code: 903 }
          ]
        }
      ] 
    },
    { 
      code: 8, 
      title: "High Discounts", 
      groups: [
        {
          title: "Deals",
          items: [
            { name: "50% Off", code: 1001 },
            { name: "Clearance Sale", code: 1002 },
            { name: "Bargain Books", code: 1003 }
          ]
        }
      ] 
    },
    { 
      code: 9, 
      title: "Stationery & Art Supplies", 
      groups: [
        {
          title: "Categories",
          items: [
            { name: "Notebooks & Journals", code: 1101 },
            { name: "Pens & Pencils", code: 1102 },
            { name: "Art Material", code: 1103 },
            { name: "Office Supplies", code: 1104 }
          ]
        }
      ] 
    },
    { 
      code: 10, 
      title: "Toys & Games", 
      groups: [
        {
          title: "Fun & Games",
          items: [
            { name: "Educational Toys", code: 1201 },
            { name: "Board Games", code: 1202 },
            { name: "Puzzles", code: 1203 }
          ]
        }
      ] 
    },
    { 
      code: 11, 
      title: "Send Gift Card", 
      groups: [
        {
          title: "Gift Cards",
          items: [
            { name: "Digital Gift Cards", code: 1301 },
            { name: "Physical Gift Cards", code: 1302 },
            { name: "Corporate Gifting", code: 1303 }
          ]
        }
      ] 
    },
  ];