import chairman from '@/assets/chairman.png';

export function VisionMission() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-accent/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">Vision & Mission</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to be a leading multi-disciplinary health sciences institution known for excellence, innovation, and compassionate care. We aim to shape globally competent healthcare professionals who uphold the highest standards of practice. We foster a culture of research, leadership, and lifelong learning, making a meaningful impact on community and global health.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to deliver high-quality, compassionate, and practice-oriented education across nursing, paramedical, and physiotherapy fields. Guided by the education concept of Janapriya Nursing College Hassan, Janapriya Institute of Paramedical Sciences Hassan, Janapriya College of Physiotherapy Hassan, Janapriya College of Physiotherapy Mangalore, and Janapriya Institute of Allied Health Sciences Mangalore, we strive to develop ethically responsible, skilled, and patient-centred healthcare professionals. We promote innovation, evidence-based training, and strong clinical exposure, contributing to excellence in healthcare and community wellbeing.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium-lg">
              <img
                src={chairman}
                alt="Chairman of Janapriya Group of Institutions"
                className="w-full h-[400px] md:h-[500px] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 gradient-primary p-6">
                <p className="text-primary-foreground font-semibold text-lg">Dr Abdul Basheer VK</p>
                <p className="text-primary-foreground/80 text-sm">Founder Chairman</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
