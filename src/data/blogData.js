export const blogPosts = [
    {
      id: 1,
      title: "El impacto de los LLMs en el Ciclo de Desarrollo de Software",
      slug: "impacto-llm-desarrollo-software",
      excerpt: "Analizamos cómo herramientas como GitHub Copilot y ChatGPT están transformando no solo cómo escribimos código, sino cómo arquitecturamos soluciones.",
      content: `
  # El Nuevo Paradigma del Desarrollo con IA
  
  La llegada de los Grandes Modelos de Lenguaje (LLMs) ha marcado un antes y un después en nuestra industria. Ya no se trata solo de autocompletar líneas de código, sino de tener un "pair programmer" incansable.
  
  ## Más allá del autocompletado
  
  Como desarrolladores backend, el uso de IA nos permite:
  - **Generar Boilerplate:** Crear estructuras CRUD en segundos.
  - **Unit Testing:** Generar casos de prueba para bordes (edge cases) que quizás no habíamos considerado.
  - **Refactoring:** Sugerir optimizaciones de complejidad ciclomática.
  
  ### Ejemplo práctico
  
  Imagina que necesitas un script rápido en Python para limpiar datos. En lugar de escribirlo desde cero:
  
  \`\`\`python
  # Prompt: Genera un script para limpiar CSVs eliminando filas duplicadas
  import pandas as pd
  
  def clean_data(file_path):
      df = pd.read_csv(file_path)
      df_cleaned = df.drop_duplicates()
      return df_cleaned
  \`\`\`
  
  ## El rol del Ingeniero Humano
  
  A pesar de estas ventajas, la **supervisión** es más crítica que nunca. Un LLM puede alucinar librerías inexistentes o sugerir código inseguro. Nuestro valor se desplaza de "escribir sintaxis" a "diseñar sistemas y validar lógica".
  
  ## Conclusión
  
  La IA no viene a reemplazarnos, sino a potenciar a quienes sepan integrarla en su flujo de trabajo diario.
      `,
      category: "Inteligencia Artificial",
      tags: ["LLM", "Productividad", "Future of Work"],
      author: "Julio Muñoz",
      date: "2025-02-10",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      id: 2,
      title: "RAG: Llevando la IA Generativa a tus Datos Privados",
      slug: "rag-generacion-aumentada-recuperacion",
      excerpt: "Una introducción técnica a RAG (Retrieval-Augmented Generation) y cómo permite a las empresas usar IA sin exponer sus datos confidenciales al entrenamiento público.",
      content: `
  # ¿Qué es RAG?
  
  Retrieval-Augmented Generation (RAG) es la técnica que permite conectar un modelo como GPT-4 a tus propios datos empresariales (PDFs, Bases de datos, Wikis) para obtener respuestas precisas y contextualizadas.
  
  ## ¿Por qué es importante?
  
  Las empresas no quieren subir sus datos financieros a un modelo público. RAG soluciona esto manteniendo los datos en casa.
  
  ## Arquitectura Básica de un sistema RAG
  
  1. **Ingesta:** Convertimos documentos a vectores (Embeddings).
  2. **Almacenamiento:** Guardamos esos vectores en una Vector DB (como Pinecone o ChromaDB).
  3. **Recuperación:** Cuando el usuario pregunta, buscamos los fragmentos más relevantes.
  4. **Generación:** Enviamos al LLM la pregunta + los fragmentos recuperados.
  
  ### Ejemplo de flujo en Python (LangChain)
  
  \`\`\`python
  from langchain.chains import RetrievalQA
  from langchain.llms import OpenAI
  
  qa = RetrievalQA.from_chain_type(
      llm=OpenAI(), 
      chain_type="stuff", 
      retriever=docsearch.as_retriever()
  )
  \`\`\`
  
  Esta arquitectura es fundamental para el futuro de las aplicaciones empresariales inteligentes.
      `,
      category: "Arquitectura AI",
      tags: ["RAG", "LangChain", "Vector DB", "Python"],
      author: "Julio Muñoz",
      date: "2025-01-28",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
    },
    {
      id: 3,
      title: "Ética y Privacidad: El Desafío de la IA en 2026",
      slug: "etica-privacidad-ia-2026",
      excerpt: "A medida que la IA se integra en servicios financieros y de salud, ¿cómo garantizamos que las decisiones sean justas y los datos estén seguros?",
      content: `
  # La Caja Negra
  
  Uno de los mayores desafíos de las redes neuronales profundas es la interpretabilidad. Si un modelo rechaza un crédito bancario, ¿podemos explicar exactamente por qué?
  
  ## Sesgos en los Datos
  
  Los modelos son tan buenos como los datos con los que fueron entrenados. Si alimentamos un modelo con datos históricos sesgados, la IA perpetuará esos sesgos.
  
  - **Bias de selección:** Datos que no representan a toda la población.
  - **Bias de confirmación:** Modelos que tienden a reforzar estereotipos existentes.
  
  ## Privacidad de Datos (GDPR y Chile)
  
  Con la nueva Ley de Protección de Datos en Chile y regulaciones globales, el manejo de datos en IA debe ser:
  1. **Anónimo:** Eliminar PII antes del entrenamiento.
  2. **Consentido:** El usuario debe saber que interactúa con una IA.
  3. **Auditable:** Debemos poder trazar las decisiones.
  
  Como ingenieros de software, somos los guardianes de esta ética en la implementación técnica.
      `,
      category: "Ética",
      tags: ["Privacidad", "Seguridad", "Regulación"],
      author: "Julio Muñoz",
      date: "2025-01-15",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    }
  ];