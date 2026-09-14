export function InstagramFeed() {
  const images = [
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400',
  ];

  return (
    <div className="elva-insta-section">
      <h3>تابعونا @elva</h3>
      <p>شاركونا لحظاتكم مع منتجاتنا</p>
      <div className="elva-insta-grid">
        {images.map((img, i) => (
          <div key={i} className="elva-insta-item" style={{ backgroundImage: `url(${img})` }} />
        ))}
      </div>
    </div>
  );
}
