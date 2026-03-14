"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, Zap, TrendingUp, Award, BarChart3, MessageCircle, HelpCircle, Gamepad2, Music, Film, Star, Heart, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSmall"
      background="fluid"
      cardStyle="gradient-radial"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="ShadowPlay"
          navItems={[
            { name: "Games", id: "games" },
            { name: "Music", id: "music" },
            { name: "Movies", id: "movies" },
            { name: "Community", id: "community" }
          ]}
          button={{ text: "Upload", href: "#upload" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Discover Upload Play All in Shadow"
          description="ShadowPlay is the free platform where indie creators share games, music, and movies without limits. Browse, rate, and support the work you love—no paywalls, no gatekeeping."
          tag="Indie Creator Paradise"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Now", href: "#discover" },
            { text: "Become a Creator", href: "#upload" }
          ]}
          buttonAnimation="slide-up"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-psd/futuristic-music-landing-page-template_23-2149013174.jpg", imageAlt: "indie game screenshot pixel art colorful" },
            { imageSrc: "http://img.b2bpic.net/free-photo/field-with-night-scene-background_9083-8060.jpg", imageAlt: "game interface HUD gameplay cinematic" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/artist-songwriter-playing-guitar-by-watching-online-musical-lessons_482257-121730.jpg", imageAlt: "music album art vinyl record aesthetic" },
            { imageSrc: "http://img.b2bpic.net/free-photo/smiling-witch-sitting-bench_23-2147686832.jpg", imageAlt: "independent film poster cinematic dark" }
          ]}
          background={{ variant: "gradient-bars" }}
          avatarText="Join 50K+ creators"
        />
      </div>

      <div id="discover" data-section="discover">
        <FeatureHoverPattern
          title="Browse Without Boundaries"
          description="Explore curated collections of indie games, original music, and independent films all in one place. Discover your next favorite from creators who pour their hearts into their work."
          tag="Seamless Discovery"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            { icon: Gamepad2, title: "Games", description: "From pixel art adventures to experimental indie titles. Play directly or download to experience authentic indie game design." },
            { icon: Music, title: "Music", description: "Original soundtracks, bedroom producers, and emerging artists. Discover fresh beats and support independent musicians." },
            { icon: Film, title: "Movies", description: "Short films, documentaries, and feature-length works. Stream indie cinema without studio gatekeeping." },
            { icon: Star, title: "Rate & Review", description: "Share your thoughts and help creators improve. Your feedback directly shapes the future of their work." },
            { icon: Heart, title: "Favorite Collections", description: "Curate personal lists of your favorite discoveries. Build communities around shared interests." },
            { icon: Users, title: "Creator Profiles", description: "Follow your favorite indie creators and see everything they produce across all three media types." }
          ]}
          animationType="scale-rotate"
          buttons={[{ text: "Start Exploring", href: "#explore" }]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="categories" data-section="categories">
        <ProductCardThree
          title="Featured Categories"
          description="Dive into trending collections curated by our community. Each category showcases the best work from independent creators across ShadowPlay."
          tag="This Week's Hottest"
          tagIcon={TrendingUp}
          tagAnimation="opacity"
          textboxLayout="split"
          useInvertedBackground={false}
          gridVariant="bento-grid"
          animationType="slide-up"
          products={[
            { id: "retro-games", name: "Retro Pixel Adventures", price: "1,247 Games", imageSrc: "http://img.b2bpic.net/free-psd/retro-gaming-instagram-stories_23-2151188405.jpg", imageAlt: "retro pixel art collection game montage" },
            { id: "synthwave-music", name: "Synthwave & Vaporwave", price: "3,891 Tracks", imageSrc: "http://img.b2bpic.net/free-photo/light-streak-lines-background_23-2148133177.jpg", imageAlt: "synthwave neon aesthetic grid digital" },
            { id: "indie-films", name: "Independent Cinema", price: "542 Films", imageSrc: "http://img.b2bpic.net/free-photo/retro-vhs-packaging-still-life_23-2149854362.jpg", imageAlt: "indie film festival poster collection" },
            { id: "lo-fi-beats", name: "Lo-Fi Hip Hop Beats", price: "2,156 Albums", imageSrc: "http://img.b2bpic.net/free-photo/meditation-concept-digital-art-style_23-2151544406.jpg", imageAlt: "lo-fi hip hop beats visual aesthetic" }
          ]}
          buttons={[{ text: "Browse All", href: "#browse" }]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="creators" data-section="creators">
        <TeamCardSix
          title="Spotlight: Rising Creators"
          description="Meet the talented indie creators powering ShadowPlay. These are the artists, developers, and filmmakers redefining what's possible without corporate backing."
          tag="Community Heroes"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="split-actions"
          useInvertedBackground={true}
          gridVariant="asymmetric-60-wide-40-narrow"
          animationType="blur-reveal"
          members={[
            { id: "creator-1", name: "Luna Dev", role: "Game Developer", imageSrc: "http://img.b2bpic.net/free-photo/low-angle-woman-working-laptop_23-2148471006.jpg", imageAlt: "female game developer portrait professional" },
            { id: "creator-2", name: "Neon Sound", role: "Music Producer", imageSrc: "http://img.b2bpic.net/free-photo/retro-vhs-packaging-indoors_23-2150172444.jpg", imageAlt: "music producer with equipment headphones" },
            { id: "creator-3", name: "Pixel Dreams", role: "Filmmaker", imageSrc: "http://img.b2bpic.net/free-photo/clapperboard-wooden-background_23-2147698801.jpg", imageAlt: "filmmaker director professional portrait" },
            { id: "creator-4", name: "Echo Beats", role: "Electronic Artist", imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-cheerful-musician-happily-working-new-album-modern-sound-recording-studio_574295-2447.jpg", imageAlt: "music artist musician performing portrait" }
          ]}
          buttons={[{ text: "View All Creators", href: "#creators" }]}
          buttonAnimation="opacity"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="ShadowPlay by the Numbers"
          description="A growing community of creators and consumers building the future of independent media."
          tag="Community Stats"
          tagIcon={BarChart3}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            { id: "creators", value: "50K+", description: "Active Indie Creators" },
            { id: "content", value: "250K+", description: "Games, Music & Films" },
            { id: "users", value: "500K+", description: "Community Members" },
            { id: "uploads", value: "1.2M+", description: "Total Uploads" }
          ]}
          buttons={[{ text: "Join the Movement", href: "#signup" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Creators Love About ShadowPlay"
          description="Hear directly from indie developers, musicians, and filmmakers about why ShadowPlay is their platform of choice."
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Creator Voices"
          tagIcon={MessageCircle}
          tagAnimation="opacity"
          testimonials={[
            { id: "1", title: "No Gatekeeping", quote: "Finally, a platform that lets my indie game reach people without corporate approval processes. Complete creative freedom.", name: "Alex Chen", role: "Game Developer", imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-with-trendy-hairdo-frowns-face-with-pleasure_273609-8674.jpg", imageAlt: "professional developer headshot portrait" },
            { id: "2", title: "Real Community", quote: "The feedback from players here is genuine. They care about indie games, not just AAA titles. It's incredibly motivating.", name: "Sarah Mitchell", role: "Indie Developer", imageSrc: "http://img.b2bpic.net/free-photo/lawyer-doing-her-job_23-2148172253.jpg", imageAlt: "female developer professional portrait" },
            { id: "3", title: "Direct Connection", quote: "My music found its audience on ShadowPlay. Streaming directly to people who appreciate independent artists. No middleman.", name: "Marcus Johnson", role: "Music Producer", imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-wearing-headphones_23-2148802280.jpg", imageAlt: "music producer man portrait professional" },
            { id: "4", title: "Creative Freedom", quote: "My documentary reached 10K views in two weeks. ShadowPlay respects artistic vision in ways traditional platforms don't.", name: "Elena Rodriguez", role: "Filmmaker", imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-posing-with-cup-clipboard-white-background-high-quality-photo_114579-61139.jpg", imageAlt: "female filmmaker director portrait" },
            { id: "5", title: "Growing My Fanbase", quote: "Started with 50 followers. Now I'm collaborating with other creators on ShadowPlay. The community is magic.", name: "Jamie Park", role: "Game Artist", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-man-posing-spotlight_23-2151916031.jpg", imageAlt: "artist creative professional portrait" },
            { id: "6", title: "100% Creator-Focused", quote: "ShadowPlay actually listens to what creators need. Feature requests become reality. This is our platform.", name: "Daniel Foster", role: "Sound Designer", imageSrc: "http://img.b2bpic.net/free-photo/songwriter-mixing-mastering-tracks-stereo-console_482257-121290.jpg", imageAlt: "sound engineer professional portrait" }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about ShadowPlay—uploading, browsing, monetization, and community guidelines."
          tag="Get Answers"
          tagIcon={HelpCircle}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="blur-reveal"
          faqs={[
            { id: "1", title: "Is ShadowPlay really free?", content: "Yes, completely free. You can upload, browse, and download content without any paywalls. We're building a truly free platform for indie creators and content consumers. Eventually, we may offer optional paid features like advanced analytics for creators, but core functionality will always be free." },
            { id: "2", title: "How do I upload my game, music, or film?", content: "Create an account, go to your creator dashboard, and click 'Upload New Content.' You can upload games (web, Windows, Mac), music tracks (MP3, WAV, FLAC), or films (MP4, MOV, WebM). Our backend will handle hosting and delivery. File size limits and formats are clearly shown during upload." },
            { id: "3", title: "Can I monetize my content?", content: "We're building monetization features into ShadowPlay. Creators can enable 'Pay What You Want' downloads, set a minimum price, or enable donations. We take a small cut to cover server costs, but you keep the majority of revenue. Full monetization details coming soon." },
            { id: "4", title: "What if I find inappropriate content?", content: "Report it directly from the content page. Our community moderation team reviews flagged content within 24 hours. ShadowPlay has clear community guidelines around copyright, harassment, and explicit content. Repeat violators face account suspension or removal." },
            { id: "5", title: "Can I download content to play offline?", content: "Yes! Games, music, and films can be downloaded directly. For games, you get the playable file. For music, you can download in your preferred format. For films, downloads are available in standard quality. Creators control whether downloads are enabled for their content." },
            { id: "6", title: "How does ShadowPlay support small creators?", content: "We provide free hosting, no platform fees, analytics tools to track engagement, community discovery features to help your work get found, and direct connections with fans. Smaller creators aren't buried by algorithms—we showcase emerging work alongside established creators." }
          ]}
          buttons={[{ text: "Contact Support", href: "#contact" }]}
          buttonAnimation="opacity"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Join the Movement"
          title="Start Your ShadowPlay Journey"
          description="Whether you're a creator ready to share your work or a consumer eager to discover indie masterpieces, ShadowPlay is waiting for you. Sign up today and be part of the revolution."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={true}
          inputPlaceholder="Enter your email to get started"
          buttonText="Get Access"
          termsText="By signing up, you agree to join our creator community and receive updates about ShadowPlay. Read our Terms and Community Guidelines."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-vector/futuristic-technology-infographic-pack_52683-34336.jpg"
          imageAlt="digital platform interface showcase grid"
          logoText="ShadowPlay"
          copyrightText="© 2025 ShadowPlay. The free platform for indie creators."
          columns={[
            {
              title: "Platform",              items: [
                { label: "Browse Games", href: "#games" },
                { label: "Browse Music", href: "#music" },
                { label: "Browse Films", href: "#movies" },
                { label: "Upload Content", href: "#upload" }
              ]
            },
            {
              title: "Community",              items: [
                { label: "Featured Creators", href: "#creators" },
                { label: "Community Guidelines", href: "#guidelines" },
                { label: "Creator Resources", href: "#resources" },
                { label: "Discussions", href: "#community" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About ShadowPlay", href: "#about" },
                { label: "Blog", href: "#blog" },
                { label: "Contact Us", href: "#contact" },
                { label: "Careers", href: "#careers" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Cookie Policy", href: "#cookies" },
                { label: "Report Copyright", href: "#report" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}