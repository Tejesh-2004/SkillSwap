import React, { useState } from 'react';

const testimonials = [
  {
    name: "Priya S.",
    avatar: "/logo.png",
    rating: 5,
    text: "SkillSwap+ helped me learn guitar and teach yoga in my neighborhood. The process was super simple and fun!"
  },
  {
    name: "Rahul K.",
    avatar: "/logo.png",
    rating: 4,
    text: "I love the gamified badges! I’ve made so many friends while learning new skills."
  },
  {
    name: "Ayesha M.",
    avatar: "/logo.png",
    rating: 5,
    text: "The platform is so user-friendly. I joined a gardening group and now my balcony is full of plants!"
  }
];

const faqs = [
  {
    question: "What kinds of skills can I learn on SkillSwap+?",
    answer: "You can learn a wide variety of skills—from music, art, and cooking to coding, gardening, languages, and more. If someone in your community can teach it, you can learn it here!",
  },
  {
    question: "Can I learn and teach at the same time?",
    answer: "Absolutely! SkillSwap+ encourages you to both share your expertise and pick up new skills. You can be a learner and a teacher simultaneously.",
  },
  {
    question: "Is SkillSwap+ free to use?",
    answer: "Yes! Creating an account and exchanging skills with others is completely free. Some group events or materials may have optional costs, but the platform itself is free.",
  },
  {
    question: "How do I know if someone is trustworthy?",
    answer: "All users have profiles with ratings and reviews. You can check their feedback and connect with verified members for added peace of mind.",
  },
  {
    question: "Can I join group sessions or only one-on-one?",
    answer: "You can do both! Join group activities, workshops, or connect for private sessions—whatever suits your learning style.",
  }
];

const gettingStarted = [
  {
    label: "Sign up",
    detail: "Create your free SkillSwap+ account with just your email or social login. It takes less than a minute to get started!"
  },
  {
    label: "Complete your profile",
    detail: "Add a profile picture, write a short bio, and specify your interests. This helps others connect with you and builds trust in the community."
  },
  {
    label: "List your skills",
    detail: "Share what you can teach and what you’d like to learn. The more details you add, the easier it is to find the perfect match."
  },
  {
    label: "Connect and start learning!",
    detail: "Browse local users, send connection requests, chat, and join sessions. Start exchanging skills and earning badges right away!"
  }
];

const sectionStyle = {
  maxWidth: 900,
  margin: '2.5rem auto',
  background: 'rgba(255,255,255,0.97)',
  borderRadius: 14,
  boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
  padding: '2.5rem',
  fontFamily: "'Quicksand', Arial, sans-serif"
};

const testimonialStyle = {
  background: '#f1f8e9',
  borderRadius: 10,
  padding: '1.2rem 1.5rem',
  marginBottom: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  boxShadow: '0 1px 6px rgba(0,0,0,0.03)'
};

const avatarStyle = {
  width: 54,
  height: 54,
  borderRadius: '50%',
  objectFit: 'contain',
  border: '2px solid #43cea2',
  position: 'absolute',
  left: '1rem',
  top: '1rem'
};

const ratingStyle = {
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  color: '#388e3c'
};

const contentStyle = {
  marginLeft: 80,
  marginRight: 60,
  paddingTop: 10,
  paddingBottom: 10
};

const starStyle = {
  color: '#ffd600',
  marginRight: '0.1rem'
};

// Callout box styles
const calloutBoxStyle = {
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(90deg, #e3f2fd 20%, #f1f8e9 100%)',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(67,206,162,0.10)',
  padding: '1.5rem 2rem',
  margin: '2.2rem 0 2.4rem 0',
  flexWrap: 'wrap'
};

const calloutItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
  fontWeight: 700,
  fontSize: '1.18rem',
  color: '#388e3c',
  background: '#fffde7',
  borderRadius: 8,
  boxShadow: '0 1px 4px rgba(255,214,0,0.07)',
  padding: '0.6rem 1.2rem',
  fontFamily: "'Poppins', Arial, sans-serif"
};

// FAQ styles
const faqSectionStyle = {
  marginTop: '2.7rem',
  marginBottom: '0.5rem',
};

const faqBoxStyle = (hovered) => ({
  borderRadius: 10,
  marginBottom: '1.2rem',
  padding: '1.1rem 1.5rem',
  boxShadow: hovered
    ? '0 4px 18px rgba(67,206,162,0.16)'
    : '0 1px 6px rgba(67,206,162,0.08)',
  background: hovered
    ? 'linear-gradient(90deg, #e3f2fd 60%, #f1f8e9 100%)'
    : 'linear-gradient(90deg, #f1f8e9 60%, #e3f2fd 100%)',
  transition: 'background 0.3s, box-shadow 0.3s, transform 0.3s',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transform: hovered ? 'scale(1.03)' : 'scale(1)',
});

const faqQStyle = {
  color: '#388e3c',
  fontWeight: 700,
  fontSize: '1.15rem',
  marginBottom: '0.35rem',
  fontFamily: "'Poppins', Arial, sans-serif",
};

const faqAStyle = {
  color: '#185a9d',
  fontWeight: 500,
  fontSize: '1.08rem',
  fontFamily: "'Quicksand', Arial, sans-serif",
};

// Checklist styles
const checklistSectionStyle = {
  marginTop: '2.5rem',
  marginBottom: '0.5rem',
};

const checklistItemStyle = (open, hovered) => ({
  background: open
    ? 'linear-gradient(90deg, #e3f2fd 60%, #f1f8e9 100%)'
    : hovered
    ? 'linear-gradient(90deg, #dcedc8 60%, #e3f2fd 100%)' // changed hover background to a soft green gradient
    : '#f1f8e9',
  border: 'none',
  borderRadius: 10,
  boxShadow: open
    ? '0 4px 16px rgba(67,206,162,0.12)'
    : hovered
    ? '0 2px 10px rgba(46,125,50,0.3)' // changed hover box shadow to a greenish shadow
    : '0 1px 6px rgba(67,206,162,0.06)',
  marginBottom: '1.1rem',
  padding: '1rem 1.3rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  fontFamily: "'Poppins', Arial, sans-serif",
  fontWeight: 600,
  fontSize: '1.15rem',
  color: hovered ? '#2e7d32' : '#388e3c', // changed hover text color to a darker green
  transition: 'background 0.25s, box-shadow 0.25s, color 0.2s',
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  outline: hovered ? '2px solid #81c784' : 'none' // changed outline to a soft green
});

const checkIconStyle = {
  fontSize: '1.4rem',
  marginRight: '1rem',
};

const detailStyle = {
  marginTop: '0.7rem',
  color: '#185a9d',
  fontFamily: "'Quicksand', Arial, sans-serif",
  fontWeight: 500,
  fontSize: '1.07rem',
  lineHeight: 1.5,
  paddingLeft: '2.2rem',
  transition: 'max-height 0.25s, opacity 0.25s',
};

const HowItWorks = () => {
  const [hoveredFaq, setHoveredFaq] = useState(null);
  const [openChecklist, setOpenChecklist] = useState(null);
  const [hoveredChecklist, setHoveredChecklist] = useState(null);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} style={starStyle}>&#9733;</span>); // filled star
      } else {
        stars.push(<span key={i} style={{ ...starStyle, color: '#ccc' }}>&#9733;</span>); // empty star
      }
    }
    return stars;
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '2rem 0' }}>
      <div style={sectionStyle}>
        <h1 style={{ fontFamily: "'Pacifico', cursive", fontSize: '2.4rem', color: '#388e3c', marginBottom: '1.2rem' }}>
          How SkillSwap+ Works
        </h1>
        <ol style={{ paddingLeft: '1.2rem', marginBottom: '2.5rem', fontSize: '1.2rem', color: '#185a9d' }}>
          <li style={{ marginBottom: '1rem' }}>
            <b>Sign Up & Create Your Profile:</b> Join SkillSwap+ and set up your profile. List the skills you can teach and those you want to learn.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <b>Browse & Connect:</b> Explore local users and groups. Send requests to connect, chat, and schedule meetups or online sessions.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <b>Exchange Skills & Grow:</b> Attend sessions, earn badges, and leave feedback. Watch your skills and connections grow!
          </li>
        </ol>

        {/* Callout Box: Unique Features */}
        <div style={calloutBoxStyle}>
          <div style={calloutItemStyle}>🎉 100% Free</div>
          <div style={calloutItemStyle}>🛡️ Safe & Verified Community</div>
          <div style={calloutItemStyle}>🏅 Earn Badges & Rewards</div>
          <div style={calloutItemStyle}>🌱 Learn & Teach Any Skill</div>
        </div>

        <h2 style={{ color: '#2e7d32', marginBottom: '1.2rem', fontFamily: "'Poppins', Arial, sans-serif" }}>Why Users Love SkillSwap+</h2>
        {testimonials.map((t, i) => (
          <div style={testimonialStyle} key={i}>
            <img src={t.avatar} alt={t.name} style={avatarStyle} />
            <div style={ratingStyle}>
              {renderStars(t.rating)} {t.rating}/5
            </div>
            <div style={contentStyle}>
              <b>{t.name}</b>
              <div style={{ fontSize: '1.08rem', color: '#333', marginTop: '0.3rem' }}>{t.text}</div>
            </div>
          </div>
        ))}

        {/* FAQ Section */}
        <div style={faqSectionStyle}>
          <h2 style={{ color: '#2e7d32', marginBottom: '0.7rem', fontFamily: "'Poppins', Arial, sans-serif" }}>Frequently Asked Questions</h2>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={faqBoxStyle(hoveredFaq === idx)}
              onMouseEnter={() => setHoveredFaq(idx)}
              onMouseLeave={() => setHoveredFaq(null)}
              tabIndex={0}
              onFocus={() => setHoveredFaq(idx)}
              onBlur={() => setHoveredFaq(null)}
            >
              <div style={faqQStyle}>{faq.question}</div>
              <div style={faqAStyle}>{faq.answer}</div>
            </div>
          ))}
        </div>

        {/* Getting Started Checklist */}
        <div style={checklistSectionStyle}>
          <h2 style={{
            color: '#2e7d32',
            marginBottom: '0.8rem',
            fontFamily: "'Poppins', Arial, sans-serif"
          }}>
            Getting Started: Your SkillSwap+ Checklist
          </h2>
          {gettingStarted.map((item, idx) => (
            <div key={idx}>
              <button
                style={checklistItemStyle(openChecklist === idx, hoveredChecklist === idx)}
                onClick={() => setOpenChecklist(openChecklist === idx ? null : idx)}
                aria-expanded={openChecklist === idx}
                aria-controls={`checklist-detail-${idx}`}
                onMouseEnter={() => setHoveredChecklist(idx)}
                onMouseLeave={() => setHoveredChecklist(null)}
                onFocus={() => setHoveredChecklist(idx)}
                onBlur={() => setHoveredChecklist(null)}
              >
                <span style={checkIconStyle}>✅</span>
                {item.label}
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '1.2rem',
                  color: '#185a9d',
                  transition: 'transform 0.2s',
                  transform: openChecklist === idx ? 'rotate(90deg)' : 'rotate(0deg)'
                }}>
                  ▶
                </span>
              </button>
              {openChecklist === idx && (
                <div
                  id={`checklist-detail-${idx}`}
                  style={detailStyle}
                >
                  {item.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
