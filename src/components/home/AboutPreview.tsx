import heroCampus from '@/assets/hero-campus.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">About Janapriya Group of Institutions</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Janapriya Group of Institutions stands as a beacon of excellence in health sciences 
              education in Karnataka. Established with a commitment to provide world-class 
              healthcare education, we have grown to become one of the most trusted names in 
              medical and allied health sciences training.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our institution is affiliated to the prestigious Rajiv Gandhi University of Health 
              Sciences (RGUHS) and recognized by the Government of Karnataka. We are also 
              approved by the Indian Nursing Council (INC) and Karnataka Nursing Council (KNC), 
              ensuring that our programs meet the highest standards of quality and relevance.
            </p>
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                Learn More About Us
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-premium-lg">
              <img
                src={heroCampus}
                alt="Janapriya Campus"
                className="w-full h-[350px] md:h-[400px] object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-premium p-4 max-w-[200px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent-dark font-bold text-xl">20+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Years of</p>
                  <p className="text-sm text-muted-foreground">Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
