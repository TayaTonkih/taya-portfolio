import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly currentYear = new Date().getFullYear();

  aboutItems = [
    { icon: '🎓', label: 'Образование', value: 'Бакалавриат, 2023–2027' },
    { icon: '📚', label: 'Курсы', value: 'Udemy (Python), Цифровая кафедра (Frontend)' },
    { icon: '🏛', label: 'Университет', value: 'Самарский университет им. Королёва' },
    { icon: '⚡', label: 'Специализация', value: 'Angular, TypeScript, HTML/CSS' },
  ];

  skillList = [
    { icon: '💻', label: 'Языки', items: ['TypeScript', 'Python', 'C#', 'Java', 'HTML / CSS'] },
    { icon: '⚙️', label: 'Фреймворки', items: ['Angular', 'Bootstrap', 'Git / GitHub'] },
    { icon: '🗄️', label: 'Базы данных', items: ['MySQL', 'PostgreSQL'] },
    { icon: '🧠', label: 'Computer Science', items: ['ООП', 'UML / BPMN', 'Проектирование БД'] },
    { icon: '🌍', label: 'Языки', items: ['Русский (родной)', 'Английский'] },
  ];

  projects = [
    {
      emoji: '🍰',
      title: '«Торты на заказ» (SPA)',
      desc: 'Клиентская часть на Angular: роутинг, компонентная архитектура. Проект защищён на «отлично».',
      tech: ['Angular', 'TypeScript', 'HTML/CSS'],
      link: 'https://github.com/TayaTonkih',
      image: 'assets/images/project-cakes.png'
    },
    {
      emoji: '🏨',
      title: 'АИС учёта проживающих',
      desc: 'НИР (2024–2027). Самостоятельно спроектировала реляционную БД (PostgreSQL), составила UML и BPMN-диаграммы.',
      tech: ['PostgreSQL', 'UML / BPMN', 'Проектирование БД'],
      link: '',
      image: 'assets/images/project-hotel.png'
    }
  ];

  achievements = [
    '🎓 Повышенная стипендия — сдала сессию на отлично',
    '🏆 Полуфиналистка федерального конкурса «Большая перемена» (2022)',
    '🎤 Ведущая туристических мероприятий и судья соревнований',
    '💃 Танцы в профессиональной группе — дисциплина, командная работа',
    '🤝 Стюард на массовых мероприятиях — коммуникация, ответственность',
  ];

  contacts = [
    { icon: '📧', label: 'Email', value: 'taya.tonkih@mail.ru', link: 'mailto:taya.tonkih@mail.ru' },
    { icon: '💬', label: 'Telegram', value: '@tn_taya', link: 'https://t.me/tn_taya' },
    { icon: '📍', label: 'Город', value: 'Самара, Россия', link: '' },
    { icon: '🐙', label: 'GitHub', value: 'TayaTonkih', link: 'https://github.com/TayaTonkih' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const nav = document.getElementById('nav');
      if (nav?.classList.contains('show')) {
        (window as any).bootstrap?.Collapse.getInstance(nav)?.hide();
      }
    }
  }
}