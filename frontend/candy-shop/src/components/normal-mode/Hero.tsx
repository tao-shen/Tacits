import { Sparkles, Search, FileText, Terminal } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface NormalHeroProps {
  onOpenDocs?: () => void;
}

export function NormalHero({ onOpenDocs }: NormalHeroProps) {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      title: t('hero.feature1.title') || 'Smart AI Skills',
      description: t('hero.feature1.description') || 'Discover intelligent AI capabilities tailored for you',
    },
    {
      icon: Search,
      title: t('hero.feature2.title') || 'Easy Discovery',
      description: t('hero.feature2.description') || 'Find the perfect skills with our intuitive search',
    },
    {
      icon: Terminal,
      title: t('hero.feature3.title') || 'Pro Mode Available',
      description: t('hero.feature3.description') || 'Switch to Pro Mode for advanced features',
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-background">
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-foreground">
              User Friendly Interface
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-foreground">
            {t('hero.title') || 'Discover Amazing'}
            <span className="text-primary"> AI Skills</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitleNormal') || 'Enhance your productivity and creativity with our curated collection of AI-powered skills. Simple, intuitive, and powerful.'}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-hover transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Search className="w-4 h-4" />
              {t('hero.exploreBtn') || 'Explore Skills'}
            </button>
            <button
              onClick={onOpenDocs}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              {t('hero.learnMoreBtn') || 'Learn More'}
            </button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex p-2.5 rounded-lg bg-primary/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
