import "./App.css";
import { createSignal, For, Show } from "solid-js";
import { createResource } from "solid-js";

export interface Links {
  self: string;
  git: string;
  html: string;
}

export interface ContentItem {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: Links;
}

function App() {
  const [content, setContent] = createSignal<ContentItem[]>([]);

  async function getContents(url: string): Promise<ContentItem[]> {
    let items: ContentItem[] = await fetch(url).then((r) => r.json());
    console.log(items);

    items
      .filter((i) => i.download_url == null)
      .map((v) =>
        getContents(v.url).then((v) => setContent((v2) => v2.concat(v)))
      );

    return items;
  }

  const [getContent] = createResource(() =>
    getContents("https://api.github.com/repos/catppuccin/wallpapers/contents")
  );

  return (
    <div class="app">
      <h1 class="title">Catppuccin Wallpapers</h1>
      <Show when={!getContent.loading}>
        <div id="grid">
          <For each={content()} fallback={<div>Loading</div>}>
            {(item) => (
              <div class="item-card">
                <div>
                  <a class="item-name" href={item.html_url}>
                    {item.name}
                  </a>
                  {" / "}
                  <span class="item-size">
                    {(item.size / 1024).toFixed(0)}kb
                  </span>
                  {" / "}
                  <span class="item-sha">{item.sha.slice(0, 7)}</span>
                </div>
                <img
                  src={item.download_url}
                  alt={item.name}
                  title={item.name}
                />
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

export default App;
