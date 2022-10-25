import './app.css';

function App() {
  return (
    <div className="app">
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-animate="true"
      >
        <g id="logo_triangles" data-group="triangles">
          <path
            d="M36.5757 383.746L146.29 319.769V447.723L36.5757 383.746Z"
            fill="#3F51B5"
            data-index="0"
          />
          <path
            d="M146.286 319.774L36.5715 383.751L36.5715 255.797L146.286 319.774Z"
            fill="#2196F3"
            data-index="1"
          />
          <path
            d="M36.5757 255.816L146.29 191.839V319.793L36.5757 255.816Z"
            fill="#03A9F4"
            data-index="2"
          />
          <path
            d="M146.286 191.844L36.5714 255.821L36.5714 127.867L146.286 191.844Z"
            fill="#00BCD4"
            data-index="3"
          />
          <path
            d="M36.5757 127.874L146.29 63.8973V191.851L36.5757 127.874Z"
            fill="#009688"
            data-index="4"
          />
          <path
            d="M255.976 127.874L146.261 191.851V63.8973L255.976 127.874Z"
            fill="#4CAF50"
            data-index="5"
          />
          <path
            d="M146.256 191.836L255.97 127.859V255.813L146.256 191.836Z"
            fill="#8BC34A"
            data-index="6"
          />

          <path
            d="M365.676 191.856L255.961 127.879V255.833L365.676 191.856Z"
            fill="#CDDC39"
            data-index="7"
          />
          <path
            d="M255.947 127.874L365.661 191.851V63.8973L255.947 127.874Z"
            fill="#FFEB3B"
            data-index="8"
          />
          <path
            d="M475.377 127.874L365.663 63.8973V191.851L475.377 127.874Z"
            fill="#FF9800"
            data-index="9"
          />
          <path
            d="M365.697 191.827L475.412 255.804V127.85L365.697 191.827Z"
            fill="#F44336"
            data-index="10"
          />
          <path
            d="M475.397 255.773L365.683 191.796V319.75L475.397 255.773Z"
            fill="#E91E63"
            data-index="11"
          />
          <path
            d="M365.696 319.724L475.41 383.701V255.747L365.696 319.724Z"
            fill="#9C27B0"
            data-index="12"
          />
          <path
            d="M475.396 383.686L365.681 319.709V447.663L475.396 383.686Z"
            fill="#673AB7"
            data-index="13"
          />
        </g>
        <g id="logo_shadows" data-group="shadows" className="show">
          <path
            d="M36.5757 383.746L146.29 319.769V447.723L36.5757 383.746Z"
            fill="black"
            fillOpacity="0.0"
            data-index="0"
          />
          <path
            d="M146.286 319.774L36.5715 383.751L36.5715 255.797L146.286 319.774Z"
            fill="black"
            fillOpacity="0.0"
            data-index="1"
          />
          <path
            d="M36.5757 255.816L146.29 191.839V319.793L36.5757 255.816Z"
            fill="black"
            fillOpacity="0.0"
            data-index="2"
          />
          <path
            d="M146.286 191.844L36.5714 255.821L36.5714 127.867L146.286 191.844Z"
            fill="black"
            fillOpacity="0.0"
            data-index="3"
          />
          <path
            d="M36.5757 127.874L146.29 63.8973V191.851L36.5757 127.874Z"
            fill="black"
            fillOpacity="0.0"
            data-index="4"
          />
          <path
            d="M255.976 127.874L146.261 191.851V63.8973L255.976 127.874Z"
            fill="black"
            fillOpacity="0.5"
            data-index="5"
          />
          <path
            d="M146.256 191.836L255.97 127.859V255.813L146.256 191.836Z"
            fill="black"
            fillOpacity="0.5"
            data-index="6"
          />

          <path
            d="M365.676 191.856L255.961 127.879V255.833L365.676 191.856Z"
            fill="black"
            fillOpacity="0.0"
            data-index="7"
          />
          <path
            d="M255.947 127.874L365.661 191.851V63.8973L255.947 127.874Z"
            fill="black"
            fillOpacity="0.0"
            data-index="8"
          />
          <path
            d="M475.377 127.874L365.663 63.8973V191.851L475.377 127.874Z"
            fill="black"
            fillOpacity="0.5"
            data-index="9"
          />
          <path
            d="M365.697 191.827L475.412 255.804V127.85L365.697 191.827Z"
            fill="black"
            fillOpacity="0.5"
            data-index="10"
          />
          <path
            d="M475.397 255.773L365.683 191.796V319.75L475.397 255.773Z"
            fill="black"
            fillOpacity="0.5"
            data-index="11"
          />
          <path
            d="M365.696 319.724L475.41 383.701V255.747L365.696 319.724Z"
            fill="black"
            fillOpacity="0.5"
            data-index="12"
          />
          <path
            d="M475.396 383.686L365.681 319.709V447.663L475.396 383.686Z"
            fill="black"
            fillOpacity="0.5"
            data-index="13"
          />
        </g>
      </svg>

      <h1
        style={{
          textTransform: 'uppercase',
          fontSize: 32,
          textAlign: 'center',
          margin: 0
        }}
      >
        <span style={{ fontWeight: 400, color: '#888' }}>{'Mark'}</span>
        {'Bailey'}
      </h1>
      <span className="slogan">More than a code monkey</span>
    </div>
  );
}

export default App;
