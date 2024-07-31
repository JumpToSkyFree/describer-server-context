# describer-server-context

> A Describer library that allows you to pass and manage a context of data coming from an API or a Server.

With describer-server-context you can pass specific data coming from a server down to the components tree.

[![NPM](https://img.shields.io/npm/v/describer-server-context.svg)](https://www.npmjs.com/package/describer-server-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install from NPM

```bash
npm install --save describer-server-context
```

## Or install from github repository

```bash
npm install --save https://github.com/JumpToSkyFree/describer-server-context.git
```

## Usage

```tsx

function ChildComponent() {
  // You can update the context using `update` function and access it from different components.
  // You can also remove the context with `remove`.
  const [context, update, remove] = useConsumeServerContext<{ data: string } | null>(
    'apiData'
  )

  return <p>{JSON.stringify(context)}</p>
}

function App() {
  const [apiData, setAPIData] = useState(null);
  const serverContext = useServerContext({
    initialValue: {
      'apiData': apiData
    },
    dependencies: [apiData]
  });

  useEffect(() => {
    // Fetch your data here.
  }, []);

  return (
    <ServerContext.Provider value={apiData}>
      <ChildComponent/>
    </ServerContext.Provider>
  )
}
```

## Usage remix

```tsx

function ChildComponent() {
  // You can update the context using `update` function and access it from different components.
  // You can also remove the context with `remove`.
  const [context, update, remove] = useConsumeServerContext<{ data: string } | null>(
    'apiData'
  )

  return <p>{JSON.stringify(context)}</p>
}

function App() {
  const apiData = useLoaderData<typeof loader>();
  const serverContext = useServerContext({
    initialValue: {
      'apiData': apiData
    },
    dependencies: [apiData]
  });

  useEffect(() => {
    // Fetch your data here.
  }, []);

  return (
    <ServerContext.Provider value={apiData}>
      <ChildComponent/>
    </ServerContext.Provider>
  )
}
```


## License

MIT © [JumpToSkyFree](https://github.com/JumpToSkyFree)
