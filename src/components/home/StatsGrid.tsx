import { BookOpen, Users, Video, Library, FileText, GraduationCap } from 'lucide-react';
import heroStudents from '@/assets/hero-students.jpg';
import library from '@/assets/library.jpg';
import alumni from '@/assets/alumni.jpg';

const stats = [
  { 
    icon: BookOpen, 
    value: '5+', 
    label: 'Courses', 
    image: heroStudents,
  },
  { 
    icon: Users, 
    value: '', 
    label: 'Faculties',
    image: library,
  },
  { 
    icon: Video, 
    value: '', 
    label: 'e-Lectures',
    image: heroStudents,
  },
  { 
    icon: Library, 
    value: '4,500+', 
    label: 'Books',
    image: library,
  },
  { 
    icon: FileText, 
    value: '', 
    label: 'Research Publications',
    image: heroStudents,
  },
  { 
    icon: GraduationCap, 
    value: '', 
    label: 'Alumni Network',
    image: alumni,
  },
];

export function StatsGrid() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden h-40 md:h-52"
            >
              <img
                src={stat.image}
                alt={stat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/85 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-4">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 mb-2 text-accent" />
                {stat.value && (
                  <span className="text-2xl md:text-4xl font-bold">{stat.value}</span>
                )}
                <span className={`text-sm md:text-base text-primary-foreground/80 text-center ${!stat.value ? 'text-lg md:text-xl font-semibold text-primary-foreground' : ''}`}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
