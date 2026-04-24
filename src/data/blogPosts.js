import blog1 from "../assets/blog-01.jpg";
import blog2 from "../assets/blog-02.jpg";
import blog3 from "../assets/blog-03.jpg";
import blog4 from "../assets/blog-04.jpg";
import blog5 from "../assets/blog-05.jpg";
import blog6 from "../assets/blog-06.jpg";

const para = (text) => text;

export const BLOG_POSTS = [
  {
    id: "1",
    section: "home",
    image: blog1,
    title: "8 Inspiring Ways to Wear Dresses in the Winter",
    excerpt:
      "Layer textures and lengths with confidence—comfortable cold-weather outfits that still feel polished.",
    author: "Nancy Ward",
    dateDisplay: "July 22, 2026",
    dateISO: "2026-07-22",
    readMinutes: 6,
    tags: ["Fashion", "Winter", "Style"],
    paragraphs: [
      para(
        "Winter dressing is less about piling on random layers and more about rhythm: a slim base, one statement texture, and outerwear that actually closes against the wind. Start with a breathable base layer, add a knit or light fleece, then finish with a coat that hits at the right length for your frame."
      ),
      para(
        "Dresses shine in cold months when you pair them with opaque tights, tall boots, and a scarf that adds color without bulk. Monochrome outfits feel expensive quickly—try one accent piece in a muted jewel tone against charcoal or cream."
      ),
      para(
        "Finally, think about movement: if you can sit, stride, and reach overhead comfortably, you have found a silhouette you will keep reaching for. Small swaps—better gloves, a lined tote, a hat that frames your face—make the same dress feel new every week."
      ),
    ],
  },
  {
    id: "2",
    section: "home",
    image: blog2,
    title: "The Great Big List of Men's Gifts for the Holidays",
    excerpt:
      "Thoughtful picks at every price point, from everyday essentials to small luxuries they will actually use.",
    author: "Nancy Ward",
    dateDisplay: "July 18, 2026",
    dateISO: "2026-07-18",
    readMinutes: 8,
    tags: ["Lifestyle", "Gifts", "Holidays"],
    paragraphs: [
      para(
        "The best gifts solve a small daily friction: a sharper morning routine, a warmer commute, or a desk that feels less chaotic. Look for items with great materials and neutral colors so they slide into an existing wardrobe instead of demanding a full reset."
      ),
      para(
        "Group gifts into tiers: stocking fillers under twenty-five dollars, mid-tier upgrades like a quality belt or beanie, and one splurge-worthy piece for someone you want to spoil. Add a handwritten line about why you picked it—this costs nothing and doubles the perceived thoughtfulness."
      ),
      para(
        "If you are unsure on size, choose accessories, consumables, or experiences. A tasting flight, a museum pass, or a premium grooming set rarely needs a return trip to the post office."
      ),
    ],
  },
  {
    id: "3",
    section: "home",
    image: blog3,
    title: "5 Winter-to-Spring Fashion Trends to Try Now",
    excerpt:
      "Transition pieces and softer palettes that bridge the gap between seasons while your wardrobe catches up.",
    author: "Nancy Ward",
    dateDisplay: "July 2, 2026",
    dateISO: "2026-07-02",
    readMinutes: 5,
    tags: ["Trends", "Seasonal", "Style"],
    paragraphs: [
      para(
        "Spring shows up first in fabric weight before it shows up in temperature. Swap heavy wool for structured cotton, keep a light jacket on hand, and introduce color through socks, scarves, or a single pastel layer under a neutral shell."
      ),
      para(
        "Footwear is an easy signal of the shift: sleek sneakers or loafers with a slightly higher vamp read fresher than winter boots, even if you still need a weatherproof pair in your bag for sudden rain."
      ),
      para(
        "Trends stick when they fit your real week—work, errands, travel. Pick one directional piece at a time, wear it three different ways, and you will know if it earns a permanent hanger."
      ),
    ],
  },
  {
    id: "4",
    section: "feed",
    image: blog4,
    title: "8 Inspiring Ways to Wear Dresses in the Winter",
    excerpt:
      "Layer textures, play with length, and keep comfort in focus—here is how to make cold-weather outfits feel fresh without sacrificing warmth.",
    author: "Admin",
    dateDisplay: "Jan 22, 2026",
    dateISO: "2026-01-22",
    readMinutes: 6,
    tags: ["Street style", "Fashion", "Editorial"],
    paragraphs: [
      para(
        "Editorial shoots love dramatic capes, but real life rewards practicality. Build a winter dress look from the inside out: warm tights, boots with grip, and a coat that covers the hemline you chose on purpose."
      ),
      para(
        "Contrast keeps winter outfits from feeling flat. Matte knit against satin trim, or ribbed socks peeking under a midi hem, adds depth without loud logos."
      ),
      para(
        "When in doubt, photograph your outfit in natural light before you leave—shadows reveal whether layers read intentional or accidental."
      ),
    ],
  },
  {
    id: "5",
    section: "feed",
    image: blog5,
    title: "The Great Big List of Men's Gifts for the Holidays",
    excerpt:
      "Thoughtful picks at every price point, from everyday essentials to small luxuries they will actually use long after the season ends.",
    author: "Admin",
    dateDisplay: "Jan 18, 2026",
    dateISO: "2026-01-18",
    readMinutes: 8,
    tags: ["Lifestyle", "Gifts"],
    paragraphs: [
      para(
        "Holiday lists work best when they mix one safe classic with one surprise. Think merino crew plus a bold candle, or a leather wallet plus tickets to something local."
      ),
      para(
        "If you are shopping last minute, prioritize retailers with painless returns and clear sizing charts. A slightly oversized hoodie beats a tailored shirt that misses by half an inch."
      ),
      para(
        "Wrap with reusable fabric or simple kraft paper—presentation signals care as much as the item inside."
      ),
    ],
  },
  {
    id: "6",
    section: "feed",
    image: blog6,
    title: "5 Winter-to-Spring Fashion Trends to Try Now",
    excerpt:
      "Transition pieces, softer palettes, and lightweight layers that bridge the gap between seasons while your wardrobe catches up.",
    author: "Admin",
    dateDisplay: "Jan 16, 2026",
    dateISO: "2026-01-16",
    readMinutes: 5,
    tags: ["Trends", "Seasonal"],
    paragraphs: [
      para(
        "Runways hint at volume and sheer layers, but sidewalks reward balance. Try one airy piece anchored by something structured—a crisp blazer over a flowy skirt, for example."
      ),
      para(
        "Color trends are suggestions, not assignments. If butter yellow is everywhere but washes you out, borrow the idea through nails, a bag, or sneakers instead."
      ),
      para(
        "Photograph outfits you love mid-season; next year you will remember what actually worked instead of what looked good online for a week."
      ),
    ],
  },
];

export function getBlogPostById(postId) {
  if (postId == null || postId === "") return undefined;
  return BLOG_POSTS.find((p) => p.id === String(postId));
}

export function getHomeBlogPosts() {
  return BLOG_POSTS.filter((p) => p.section === "home");
}

export function getFeedBlogPosts() {
  return BLOG_POSTS.filter((p) => p.section === "feed");
}
