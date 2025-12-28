interface TranscriptEntry {
  timestamp: string;
  speaker: string;
  text: string;
}

interface TranscriptProps {
  entries: TranscriptEntry[];
}

export default function Transcript({ entries }: TranscriptProps) {
  return (
    <div className="flex-1 flex flex-col lg:min-h-0 lg:overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 shrink-0">Transcript</h3>
      <div className="w-full h-px bg-gray-200 mb-4 shrink-0"></div>
      <div className="flex-1 lg:flex-1 lg:overflow-y-auto custom-scrollbar lg:min-h-0">
        <div className="space-y-4 pr-2">
          {entries.map((entry, index) => (
            <div key={index} className="flex gap-4">
              <div className="shrink-0 w-20">
                <span className="text-xs text-gray-500">{entry.timestamp}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{entry.speaker}:</span> {entry.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

