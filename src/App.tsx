import { useState, useRef, useEffect } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [foundClues, setFoundClues] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [currentHint, setCurrentHint] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const clues = [
    {
      "code": "SHWR",
      "hint": "I am hiding in a shower"
    },
    {
      "code": "BATH",
      "hint": "I am hiding in a shower"
    },
    {
      "code": "FOAM",
      "hint": "I am hiding in a shower"
    },
    {
      "code": "TREF",
      "hint": "I am hiding near a tree in front of the house"
    },
    {
      "code": "PINE",
      "hint": "I am hiding near a tree in front of the house"
    },
    {
      "code": "TREB",
      "hint": "I am hiding near a tree behind the house"
    },
    {
      "code": "BARK",
      "hint": "I am hiding near a tree behind the house"
    },
    {
      "code": "BUSH",
      "hint": "I am hiding in a bush behind the house"
    },
    {
      "code": "SHRB",
      "hint": "I am hiding in a bush behind the house"
    },
    {
      "code": "BSHF",
      "hint": "I am hiding in a bush in front of the house"
    },
    {
      "code": "LEAF",
      "hint": "I am hiding in a bush in front of the house"
    },
    {
      "code": "UBED",
      "hint": "I am hiding under your bed"
    },
    {
      "code": "DUST",
      "hint": "I am hiding under your bed"
    },
    {
      "code": "PILW",
      "hint": "I am hiding under your pillow"
    },
    {
      "code": "SOFT",
      "hint": "I am hiding under your pillow"
    },
    {
      "code": "WCSH",
      "hint": "I am hiding under a pillow on the white couch"
    },
    {
      "code": "GCSH",
      "hint": "I am hiding under a pillow on the grey couch"
    },
    {
      "code": "REFG",
      "hint": "I am hiding in the refrigerator in the garage"
    },
    {
      "code": "REFK",
      "hint": "I am hiding in the refrigerator in the kitchen"
    },
    {
      "code": "REFO",
      "hint": "I am hiding in the refrigerator in the office"
    },
    {
      "code": "DROF",
      "hint": "I am hiding behind the door of the office"
    },
    {
      "code": "DRRM",
      "hint": "I am hiding behind the door of your room"
    },
    {
      "code": "DRBR",
      "hint": "I am hiding behind the door of your bathroom"
    },
    {
      "code": "DRLN",
      "hint": "I am hiding behind the door of the laundry room"
    },
    {
      "code": "DRMM",
      "hint": "I am hiding behind the door of mommy's room"
    },
    {
      "code": "DRDD",
      "hint": "I am hiding behind the door of daddy's room"
    },
    {
      "code": "TBLW",
      "hint": "I am hiding under the table by the white couch"
    },
    {
      "code": "OVEN",
      "hint": "I am hiding in the oven"
    },
    {
      "code": "MCRW",
      "hint": "I am hiding in the microwave"
    },
    {
      "code": "DISH",
      "hint": "I am hiding in the dishwasher"
    },
    {
      "code": "WASH",
      "hint": "I am hiding in the washing machine"
    },
    {
      "code": "DRYR",
      "hint": "I am hiding in the dryer"
    },
    {
      "code": "OUTC",
      "hint": "I am hiding under a pillow in the outside couch"
    },
    {
      "code": "DGHZ",
      "hint": "I am hiding in the dog house"
    },
    {
      "code": "UNWC",
      "hint": "I am hiding under the white couch"
    },
    {
      "code": "UNGC",
      "hint": "I am hiding under the grey couch"
    },
    {
      "code": "UNDC",
      "hint": "I am hiding under the daddy's couch"
    },
    {
      "code": "DSKO",
      "hint": "I am hiding in the desk in the office"
    },
    {
      "code": "DFIL",
      "hint": "I am hiding in the desk in the office"
    },
    {
      "code": "DRAW",
      "hint": "I am hiding in the desk in the office"
    },
    {
      "code": "KDRW",
      "hint": "I am hiding in a drawer in the kitchen"
    },
    {
      "code": "UTSL",
      "hint": "I am hiding in a drawer in the kitchen"
    },
    {
      "code": "SPON",
      "hint": "I am hiding in a drawer in the kitchen"
    }
  ]

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleCodeSubmit = () => {
    const foundClue = clues.find(clue => clue.code === code);
    if (foundClue) {
      if (!foundClues.includes(code)) {
        setFoundClues([...foundClues, code]);
      }
      setError('');
      setCurrentHint(foundClue.hint);
    } else {
      setError('Code not found. Try another one!');
      setCurrentHint('');
    }
    setCode('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCode = e.target.value.toUpperCase();
    setCode(newCode);
  };

  const lastFoundClue = foundClues.length > 0 ? clues.find(c => c.code === foundClues[foundClues.length - 1]) : null;

  return (
    <main className='flex-1 w-full min-h-screen flex-col items-center justify-between p-2 md:p-4 max-w-[800px] mx-auto'>
      <header className="w-full sticky top-0 z-10 bg-white dark:bg-gray-800">
        <nav className="border-gray-200 px-2 py-2">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <span className="self-center text-3xl md:text-4xl font-extrabold whitespace-nowrap dark:text-white">
              Egg Hunt Challenge 2025
            </span>
          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900 w-full px-4 md:px-8 py-6 md:py-8">
        <div className="space-y-6 md:space-y-8">
          <p className="text-xl md:text-2xl font-medium text-gray-700">
            1. Draw a ticket from the magic hat
          </p>
          <p className="text-xl md:text-2xl font-medium text-gray-700">
            2. Enter the code to unlock the next clue
          </p>
          
          <div className="space-y-6 md:space-y-8">
            <input
              ref={inputRef}
              type="text" 
              maxLength={4}
              value={code}
              autoFocus
              className="w-full p-3 md:p-4 text-4xl md:text-5xl font-medium text-center tracking-[1em] border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
              placeholder="____"
              onChange={handleCodeChange}
            />
            
            {error && (
              <p className="text-red-500 text-lg md:text-xl">{error}</p>
            )}

            <button 
              onClick={handleCodeSubmit}
              className="w-full p-3 md:p-4 text-xl md:text-2xl font-medium text-center bg-blue-600 text-white rounded-lg focus:outline-none hover:bg-blue-700 transition-colors"
            >
              Submit Code
            </button>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-medium">
                Found Clues: {foundClues.length} / {clues.length}
              </p>
              {currentHint && (
                <div className="p-4 bg-green-600 rounded-lg">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {currentHint}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App