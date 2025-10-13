export interface CodeSnippet {
  id: string;
  title: string;
  code: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

export const saveSnippet = (snippet: Omit<CodeSnippet, 'id' | 'createdAt' | 'updatedAt'>): CodeSnippet => {
  const newSnippet: CodeSnippet = {
    ...snippet,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const snippets = getSnippets();
  localStorage.setItem('codeSnippets', JSON.stringify([...snippets, newSnippet]));
  return newSnippet;
};

export const updateSnippet = (id: string, updates: Partial<Omit<CodeSnippet, 'id' | 'createdAt'>>): CodeSnippet | null => {
  const snippets = getSnippets();
  const index = snippets.findIndex(s => s.id === id);
  
  if (index === -1) return null;
  
  const updatedSnippet = {
    ...snippets[index],
    ...updates,
    updatedAt: new Date(),
  };
  
  snippets[index] = updatedSnippet;
  localStorage.setItem('codeSnippets', JSON.stringify(snippets));
  return updatedSnippet;
};

export const deleteSnippet = (id: string): boolean => {
  const snippets = getSnippets();
  const newSnippets = snippets.filter(s => s.id !== id);
  
  if (newSnippets.length === snippets.length) return false;
  
  localStorage.setItem('codeSnippets', JSON.stringify(newSnippets));
  return true;
};

export const getSnippets = (): CodeSnippet[] => {
  if (typeof window === 'undefined') return [];
  
  const snippets = localStorage.getItem('codeSnippets');
  if (!snippets) return [];
  
  return JSON.parse(snippets).map((s: any) => ({
    ...s,
    createdAt: new Date(s.createdAt),
    updatedAt: new Date(s.updatedAt),
  }));
};

export const getSnippetById = (id: string): CodeSnippet | undefined => {
  return getSnippets().find(s => s.id === id);
};
