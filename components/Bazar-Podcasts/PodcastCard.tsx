interface PodcastCardProps {
  thumbnail: string;
  title: string;
  author: string;
  date: string;
  duration: string;
  isActive?: boolean;
  onClick?: () => void;
  bg?: string;
}

export default function PodcastCard({
  thumbnail,
  title,
  author,
  date,
  duration,
  isActive = false,
  onClick,
  bg,
}: PodcastCardProps) {
  const defaultBg = isActive
    ? "bg-primary/5 border-primary"
    : "bg-white border-gray-200 hover:bg-gray-50";
  
  const backgroundClass = bg || defaultBg;

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 py-4 pl-4 pr-8 rounded-xl border transition-all ${backgroundClass}`}
    >
      {/* Thumbnail */}
      <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-200">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex-1 text-left min-w-0">
        <h3 className={`font-semibold text-sm mb-1 truncate ${isActive ? "text-primary" : "text-gray-900"}`}>
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-1 flex items-center gap-1.5">
          <span>By {author}</span>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
          </svg>
          <span>{date}</span>
        </p>
        <p className="text-xs text-primary font-bold">{duration}</p>
      </div>

      {/* Play Button */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        className="w-10 h-10 shrink-0 flex items-center justify-center cursor-pointer"
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="25.5" fill="white" stroke="#DADCE0" />
          <path d="M34.75 26.0004C34.7505 26.2126 34.6961 26.4213 34.5921 26.6063C34.488 26.7912 34.3379 26.9461 34.1562 27.0559L22.9 33.9418C22.7102 34.058 22.4929 34.1214 22.2704 34.1256C22.0479 34.1297 21.8283 34.0743 21.6344 33.9652C21.4423 33.8578 21.2822 33.7012 21.1708 33.5114C21.0593 33.3217 21.0003 33.1056 21 32.8855V19.1152C21.0003 18.8951 21.0593 18.6791 21.1708 18.4894C21.2822 18.2996 21.4423 18.143 21.6344 18.0355C21.8283 17.9264 22.0479 17.8711 22.2704 17.8752C22.4929 17.8793 22.7102 17.9428 22.9 18.059L34.1562 24.9449C34.3379 25.0547 34.488 25.2095 34.5921 25.3945C34.6961 25.5795 34.7505 25.7882 34.75 26.0004Z" fill="#8025EC" />
        </svg>
      </div>
    </button>
  );
}

