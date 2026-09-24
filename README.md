# Wikidot Date Wizard

| [한국어](#ko) | [English](#en) | [日本語](#ja) | [简体中文](#zh-cn) |
| :---: | :---: | :---: | :---: |
| [Dansk](#da) | [Deutsch](#de) | [Español](#es) | [Français](#fr) |
| [Italiano](#it) | [Polski](#pl) | [Русский](#ru) | [Српски](#sr) |

---

<a id="ko"></a>
## 한국어

> **AI 사용 고지:** 이 프로젝트의 코드와 문서는 AI의 도움을 받아 작성·수정했습니다.

### 소개

Wikidot Date Wizard는 날짜와 시간을 선택해 Wikidot의 `[[date]]` 코드를 생성하는 브라우저 도구입니다. 미리보기에는 Wikidot의 `OZONE.utils.formatOdate()`를 사용합니다.

### 사용법

`index.html`을 웹 서버에서 열고 날짜·시간과 format 문자열을 입력한 뒤 코드를 복사해 Wikidot 페이지에 붙여 넣습니다. 날짜와 시간은 **도구를 실행하는 브라우저의 현지 시간대**를 기준으로 Unix timestamp로 변환합니다.

- format을 비우면 `[[date 1234567890]]`처럼 `format` 속성 없이 생성합니다.
- 표시 형식 아래의 구문 버튼을 누르면 커서 위치에 삽입됩니다. `|agohover` 버튼은 호버 시 상대시간 표시를 켜거나 끕니다.
- 한국어·영어·일본어·중국어(간체)·덴마크어·독일어·스페인어·프랑스어·이탈리아어·폴란드어·러시아어·세르비아어 UI를 지원합니다. 처음에는 브라우저 언어를 따르고, 언어 선택 메뉴에서 변경하면 선택이 저장됩니다.
- 상대시간과 hover 문구의 단위는 Wikidot의 번역 기능으로 표시합니다. 그 외 날짜 포맷과 단·복수 처리 방식은 Wikidot 렌더러를 따릅니다.
- format 값은 Wikidot 렌더러에 그대로 전달합니다. [Wikidot 날짜 문법](https://community.wikidot.com/howto:date-how-long-ago)의 예: `%e %b %Y, %H:%M %Z|agohover`, `%O`.
- format 속성의 큰따옴표는 Wikidot 코드 구문을 깨뜨리므로 입력할 수 없습니다.
- Wikidot의 날짜 렌더러는 1970년 이전 날짜를 표시하지 않습니다. 해당 날짜의 코드는 생성되지만 미리보기는 비어 있고 경고가 나타납니다.
- 미리보기는 Wikidot의 외부 JavaScript와 CSS를 불러옵니다. 네트워크나 Wikidot 서버 문제로 해당 리소스를 불러올 수 없으면 미리보기를 사용할 수 없습니다.

빌드 과정이나 패키지 설치는 필요하지 않습니다. GitHub Pages에서 배포하려면 저장소 설정의 Pages에서 `main` 브랜치의 루트(`/`)를 게시 대상으로 선택하면 됩니다.

### 출처 및 라이선스

ErichSteinboeck이 2008년에 공개한 [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago)를 바탕으로 만든 수정판입니다. 원본 페이지는 [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)로 제공됩니다. 원본과 비교해 선택 가능한 연도를 1900~2100년으로 확장하고, NOW 버튼·코드 복사 버튼·다크 모드·입력 검증을 추가했습니다. 날짜나 format을 바꾸면 미리보기를 다시 렌더링하도록 수정했습니다.

이 수정판의 코드는 [CC BY-SA 4.0 International](LICENSE)로 배포합니다. Wikidot에서 외부로 불러오는 JavaScript와 CSS는 이 저장소에 포함되지 않으며 각각의 원래 조건이 적용됩니다.

---

<a id="en"></a>
## English

> **AI disclosure:** The code and documentation in this project were written and revised with AI assistance.

### Overview

Wikidot Date Wizard is a browser tool for generating Wikidot `[[date]]` code from a selected date and time. Its preview uses Wikidot's `OZONE.utils.formatOdate()`.

### Usage

Open `index.html` through a web server, select a date and time, enter a format string, and copy the generated code into a Wikidot page. The timestamp is calculated using **the browser's local time zone**.

- Leave the format field empty to generate code without a `format` attribute, such as `[[date 1234567890]]`.
- Click a format button below the field to insert its token at the cursor. The `|agohover` button toggles the relative-time hover text.
- The interface supports Korean, English, Japanese, Simplified Chinese, Danish, German, Spanish, French, Italian, Polish, Russian, and Serbian. It initially follows the browser language; changes made with the language selector are saved.
- Relative-time units and hover text are displayed through Wikidot's translation functions. Other date formatting and singular/plural behavior follow the Wikidot renderer.
- The format value is passed directly to the Wikidot renderer. Examples from the [Wikidot date syntax guide](https://community.wikidot.com/howto:date-how-long-ago): `%e %b %Y, %H:%M %Z|agohover` and `%O`.
- Double quotes cannot be used in the format field because they would break the generated Wikidot attribute.
- Wikidot's date renderer does not display dates before 1970. The code is still generated, but the preview remains empty and a warning appears.
- The preview loads external Wikidot JavaScript and CSS. It will not work if those resources are unavailable because of a network or Wikidot server problem.

No build step or package installation is required. To publish with GitHub Pages, select the root (`/`) of the `main` branch as the publishing source in the repository's Pages settings.

### Attribution and license

This project is adapted from the [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago) published by ErichSteinboeck in 2008 under [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). Compared with that original, it extends the year range to 1900–2100 and adds a Now button, a copy button, dark mode, and input validation. The preview is refreshed when the date or format changes.

The code in this adaptation is licensed under [CC BY-SA 4.0 International](LICENSE). External Wikidot JavaScript and CSS are not included in this repository and remain subject to their own terms.

---

<a id="ja"></a>
## 日本語

> **AI 利用の開示：** このプロジェクトのコードと文書は、AI の支援を受けて作成・修正しました。

### 概要

Wikidot Date Wizard は、選択した日時から Wikidot の `[[date]]` コードを生成するブラウザー用ツールです。プレビューには Wikidot の `OZONE.utils.formatOdate()` を使用します。

### 使い方

Web サーバー経由で `index.html` を開き、日時と書式文字列を入力して、生成されたコードを Wikidot のページに貼り付けます。Unix タイムスタンプへの変換には、**ツールを開いているブラウザーのローカルタイムゾーン**を使用します。

- 書式欄を空にすると、`[[date 1234567890]]` のように `format` 属性なしで生成します。
- 表示形式の下にあるボタンを押すと、カーソル位置に書式記号が挿入されます。`|agohover` ボタンでホバー時の相対時間表示を切り替えられます。
- UI は韓国語、英語、日本語、簡体字中国語、デンマーク語、ドイツ語、スペイン語、フランス語、イタリア語、ポーランド語、ロシア語、セルビア語に対応しています。初回はブラウザーの言語を使用し、言語メニューで変更すると選択が保存されます。
- 相対時間の単位とホバー時の文言には Wikidot の翻訳機能を使用します。そのほかの日付書式や単数・複数の処理は Wikidot のレンダラーに従います。
- 書式文字列はそのまま Wikidot のレンダラーに渡されます。[Wikidot の日付書式ガイド](https://community.wikidot.com/howto:date-how-long-ago)にある例：`%e %b %Y, %H:%M %Z|agohover`、`%O`。
- ダブルクォーテーションは生成される Wikidot の属性構文を壊すため、書式欄には入力できません。
- Wikidot の日付レンダラーは 1970 年より前の日付を表示しません。コードは生成されますが、プレビューは空になり、警告が表示されます。
- プレビューは Wikidot の外部 JavaScript と CSS を読み込みます。ネットワークや Wikidot のサーバーの問題で読み込めない場合、プレビューは使用できません。

ビルドやパッケージのインストールは不要です。GitHub Pages で公開するには、リポジトリの Pages 設定で `main` ブランチのルート（`/`）を公開元に指定します。

### 出典とライセンス

このプロジェクトは、ErichSteinboeck が 2008 年に公開した [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago) を基にした改作です。原版のライセンスは [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) です。原版と比べ、選択可能な年を 1900～2100 年に拡張し、現在日時ボタン、コードのコピーボタン、ダークモード、入力値の検証を追加しました。日時や書式を変更するとプレビューが再描画されます。

この改作のコードは [CC BY-SA 4.0 International](LICENSE) で公開します。外部から読み込む Wikidot の JavaScript と CSS はこのリポジトリには含まれず、それぞれ元の利用条件が適用されます。

---

<a id="zh-cn"></a>
## 简体中文

> **AI 使用声明：** 本项目的代码和文档在 AI 的辅助下编写和修改。

### 简介

Wikidot Date Wizard 是一款浏览器工具，可根据所选日期和时间生成 Wikidot 的 `[[date]]` 代码。预览使用 Wikidot 的 `OZONE.utils.formatOdate()`。

### 使用方法

通过 Web 服务器打开 `index.html`，选择日期和时间、输入格式字符串，然后将生成的代码复制到 Wikidot 页面。转换 Unix 时间戳时使用**运行本工具的浏览器所在时区**。

- 格式栏留空时，将生成不带 `format` 属性的代码，例如 `[[date 1234567890]]`。
- 点击格式栏下方的按钮，可在光标位置插入对应的格式符。`|agohover` 按钮可切换悬停时的相对时间提示。
- 界面支持韩语、英语、日语、简体中文、丹麦语、德语、西班牙语、法语、意大利语、波兰语、俄语和塞尔维亚语。首次使用时采用浏览器语言；通过语言菜单更改后，所选语言会被保存。
- 相对时间的单位和悬停提示文字通过 Wikidot 的翻译功能显示。其他日期格式及单复数处理遵循 Wikidot 渲染器。
- 格式字符串会直接传给 Wikidot 渲染器。[Wikidot 日期语法说明](https://community.wikidot.com/howto:date-how-long-ago)中的示例：`%e %b %Y, %H:%M %Z|agohover`、`%O`。
- 格式栏不能输入英文双引号，因为它会破坏生成代码中的 Wikidot 属性语法。
- Wikidot 的日期渲染器不显示 1970 年以前的日期。工具仍会生成代码，但预览为空，并显示警告。
- 预览需要加载 Wikidot 的外部 JavaScript 和 CSS。如果网络或 Wikidot 服务器出现问题，导致这些资源无法加载，预览便不可用。

无需构建或安装软件包。若要通过 GitHub Pages 发布，请在仓库的 Pages 设置中选择 `main` 分支的根目录（`/`）作为发布来源。

### 来源与许可

本项目改编自 ErichSteinboeck 于 2008 年发布的 [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago)。原版以 [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) 授权。与原版相比，本工具将可选年份扩展至 1900～2100 年，并添加了“当前时间”按钮、复制代码按钮、深色模式和输入校验。更改日期或格式时，预览会重新渲染。

本改编版代码以 [CC BY-SA 4.0 International](LICENSE) 授权。外部加载的 Wikidot JavaScript 和 CSS 不包含在本仓库中，仍分别受其原有条款约束。

---

<a id="da"></a>
## Dansk

> **Oplysning om brug af AI:** Projektets kode og dokumentation er skrevet og revideret med hjælp fra AI.

### Oversigt

Wikidot Date Wizard er et browserværktøj, der genererer Wikidot-koden `[[date]]` ud fra en valgt dato og et klokkeslæt. Forhåndsvisningen bruger Wikidots `OZONE.utils.formatOdate()`.

### Brug

Åbn `index.html` via en webserver, vælg dato og klokkeslæt, indtast en formatstreng, og indsæt den genererede kode på en Wikidot-side. Unix-tidsstemplet beregnes ud fra **den lokale tidszone i den browser, der kører værktøjet**.

- Hvis formatfeltet er tomt, genereres kode uden attributten `format`, f.eks. `[[date 1234567890]]`.
- Klik på en formatknap under feltet for at indsætte dens kode ved markøren. Knappen `|agohover` slår visning af relativ tid ved museoverføring til eller fra.
- Brugerfladen understøtter koreansk, engelsk, japansk, forenklet kinesisk, dansk, tysk, spansk, fransk, italiensk, polsk, russisk og serbisk. Først bruges browserens sprog; ændringer i sprogmenuen gemmes.
- Enheder i relative tidsangivelser og tekst ved museoverføring vises med Wikidots oversættelsesfunktioner. Anden datoformatering og håndtering af ental og flertal følger Wikidots renderer.
- Formatstrengen sendes uændret til Wikidots renderer. Eksempler fra [Wikidots vejledning til datosyntaks](https://community.wikidot.com/howto:date-how-long-ago): `%e %b %Y, %H:%M %Z|agohover` og `%O`.
- Dobbelte anførselstegn kan ikke bruges i formatfeltet, da de ville ødelægge syntaksen i den genererede Wikidot-attribut.
- Wikidots datorenderer viser ikke datoer før 1970. Koden genereres stadig, men forhåndsvisningen er tom, og der vises en advarsel.
- Forhåndsvisningen indlæser eksterne JavaScript- og CSS-filer fra Wikidot. Den virker ikke, hvis filerne ikke kan indlæses på grund af netværksproblemer eller problemer med Wikidots server.

Der kræves hverken et byggetrin eller installation af pakker. For at udgive med GitHub Pages skal du vælge roden (`/`) af grenen `main` som kilde i repositoryets Pages-indstillinger.

### Oprindelse og licens

Projektet er en bearbejdelse af [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago), som ErichSteinboeck udgav i 2008 under [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). I forhold til originalen er det valgbare årstal udvidet til 1900–2100, og der er tilføjet en knap til det aktuelle tidspunkt, en kopieringsknap, mørk tilstand og validering af input. Forhåndsvisningen opdateres, når datoen eller formatet ændres.

Koden i denne bearbejdelse er udgivet under [CC BY-SA 4.0 International](LICENSE). Eksterne JavaScript- og CSS-filer fra Wikidot er ikke inkluderet i dette repository og er fortsat underlagt deres egne vilkår.

---

<a id="de"></a>
## Deutsch

> **Hinweis zur KI-Nutzung:** Code und Dokumentation dieses Projekts wurden mit Unterstützung von KI erstellt und überarbeitet.

### Überblick

Wikidot Date Wizard ist ein Browserwerkzeug, das aus einem gewählten Datum und einer Uhrzeit Wikidot-Code für `[[date]]` erzeugt. Für die Vorschau wird Wikidots `OZONE.utils.formatOdate()` verwendet.

### Verwendung

Öffne `index.html` über einen Webserver, wähle Datum und Uhrzeit, gib eine Formatzeichenfolge ein und füge den erzeugten Code in eine Wikidot-Seite ein. Der Unix-Zeitstempel wird anhand **der lokalen Zeitzone des verwendeten Browsers** berechnet.

- Bei leerem Formatfeld wird Code ohne `format`-Attribut erzeugt, etwa `[[date 1234567890]]`.
- Mit den Formatschaltflächen unter dem Feld fügst du die jeweilige Zeichenfolge an der Cursorposition ein. Die Schaltfläche `|agohover` schaltet den relativen Zeittext beim Darüberfahren ein oder aus.
- Die Oberfläche unterstützt Koreanisch, Englisch, Japanisch, vereinfachtes Chinesisch, Dänisch, Deutsch, Spanisch, Französisch, Italienisch, Polnisch, Russisch und Serbisch. Zunächst wird die Browsersprache verwendet; eine Änderung im Sprachmenü wird gespeichert.
- Einheiten für relative Zeitangaben und Texte beim Darüberfahren mit der Maus werden über Wikidots Übersetzungsfunktionen angezeigt. Sonstige Datumsformatierungen sowie Singular- und Pluralformen richten sich nach dem Wikidot-Renderer.
- Die Formatzeichenfolge wird unverändert an den Wikidot-Renderer übergeben. Beispiele aus der [Wikidot-Datumssyntax](https://community.wikidot.com/howto:date-how-long-ago): `%e %b %Y, %H:%M %Z|agohover` und `%O`.
- Doppelte Anführungszeichen sind im Formatfeld nicht zulässig, da sie die Syntax des erzeugten Wikidot-Attributs beschädigen würden.
- Der Datumsrenderer von Wikidot zeigt Daten vor 1970 nicht an. Der Code wird dennoch erzeugt; die Vorschau bleibt leer und eine Warnung erscheint.
- Die Vorschau lädt externes JavaScript und CSS von Wikidot. Wenn diese Ressourcen wegen eines Netzwerk- oder Serverproblems nicht geladen werden können, ist die Vorschau nicht verfügbar.

Ein Build-Schritt oder die Installation von Paketen ist nicht erforderlich. Für die Veröffentlichung über GitHub Pages wähle in den Pages-Einstellungen des Repositorys das Stammverzeichnis (`/`) des Branches `main` als Quelle.

### Herkunft und Lizenz

Dieses Projekt basiert auf dem [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago), den ErichSteinboeck 2008 unter [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) veröffentlichte. Gegenüber dem Original wurde der wählbare Jahresbereich auf 1900–2100 erweitert. Außerdem wurden eine Schaltfläche für die aktuelle Zeit, eine Kopierfunktion, ein Dunkelmodus und eine Eingabeprüfung hinzugefügt. Änderungen am Datum oder Format aktualisieren die Vorschau.

Der Code dieser Bearbeitung steht unter [CC BY-SA 4.0 International](LICENSE). Extern eingebundenes JavaScript und CSS von Wikidot sind nicht in diesem Repository enthalten und unterliegen ihren jeweiligen Bedingungen.

---

<a id="es"></a>
## Español

> **Aviso sobre el uso de IA:** El código y la documentación de este proyecto se redactaron y modificaron con ayuda de IA.

### Descripción

Wikidot Date Wizard es una herramienta para el navegador que genera código `[[date]]` de Wikidot a partir de la fecha y la hora seleccionadas. La vista previa utiliza `OZONE.utils.formatOdate()` de Wikidot.

### Uso

Abre `index.html` desde un servidor web, selecciona la fecha y la hora, introduce una cadena de formato y pega el código generado en una página de Wikidot. La marca de tiempo Unix se calcula según **la zona horaria local del navegador en el que se utiliza la herramienta**.

- Si dejas vacío el campo de formato, se genera código sin el atributo `format`, como `[[date 1234567890]]`.
- Pulsa un botón de formato debajo del campo para insertar su código en la posición del cursor. El botón `|agohover` activa o desactiva el tiempo relativo al pasar el cursor.
- La interfaz está disponible en coreano, inglés, japonés, chino simplificado, danés, alemán, español, francés, italiano, polaco, ruso y serbio. Al principio usa el idioma del navegador; si lo cambias en el selector, la elección se guarda.
- Las unidades de tiempo relativo y los textos que aparecen al pasar el cursor se muestran mediante las funciones de traducción de Wikidot. Los demás formatos de fecha y el tratamiento de singular y plural dependen del renderizador de Wikidot.
- La cadena de formato se envía directamente al renderizador de Wikidot. Ejemplos de la [guía de sintaxis de fechas de Wikidot](https://community.wikidot.com/howto:date-how-long-ago): `%e %b %Y, %H:%M %Z|agohover` y `%O`.
- No se permiten comillas dobles en el campo de formato porque romperían la sintaxis del atributo de Wikidot generado.
- El renderizador de fechas de Wikidot no muestra fechas anteriores a 1970. El código se genera igualmente, pero la vista previa queda vacía y aparece una advertencia.
- La vista previa carga JavaScript y CSS externos de Wikidot. No funcionará si un problema de red o del servidor de Wikidot impide cargar esos recursos.

No se necesita compilar ni instalar paquetes. Para publicar con GitHub Pages, selecciona la raíz (`/`) de la rama `main` como origen en la configuración de Pages del repositorio.

### Origen y licencia

Este proyecto es una adaptación del [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago), publicado por ErichSteinboeck en 2008 con licencia [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). En comparación con el original, amplía el intervalo de años seleccionables a 1900–2100 y añade un botón para la hora actual, un botón para copiar, un modo oscuro y validación de entradas. La vista previa se actualiza cuando cambia la fecha o el formato.

El código de esta adaptación se distribuye bajo [CC BY-SA 4.0 International](LICENSE). El JavaScript y el CSS externos de Wikidot no se incluyen en este repositorio y conservan sus propias condiciones de uso.

---

<a id="fr"></a>
## Français

> **Déclaration d'utilisation de l'IA :** Le code et la documentation de ce projet ont été rédigés et modifiés avec l'aide de l'IA.

### Présentation

Wikidot Date Wizard est un outil pour navigateur qui génère du code Wikidot `[[date]]` à partir d'une date et d'une heure choisies. L'aperçu utilise `OZONE.utils.formatOdate()` de Wikidot.

### Utilisation

Ouvrez `index.html` depuis un serveur web, choisissez la date et l'heure, saisissez une chaîne de format, puis collez le code généré dans une page Wikidot. L'horodatage Unix est calculé selon **le fuseau horaire local du navigateur utilisé**.

- Si le champ de format est vide, le code est généré sans attribut `format`, par exemple `[[date 1234567890]]`.
- Cliquez sur un bouton sous le champ de format pour insérer sa séquence à la position du curseur. Le bouton `|agohover` active ou désactive l’affichage du temps relatif au survol.
- L'interface prend en charge le coréen, l'anglais, le japonais, le chinois simplifié, le danois, l'allemand, l'espagnol, le français, l'italien, le polonais, le russe et le serbe. Elle utilise d'abord la langue du navigateur ; un changement effectué dans le sélecteur de langue est enregistré.
- Les unités de temps relatif et les textes affichés au survol utilisent les fonctions de traduction de Wikidot. Les autres formats de date et la gestion du singulier et du pluriel suivent le moteur de rendu de Wikidot.
- La chaîne de format est transmise directement au moteur de rendu de Wikidot. Exemples tirés du [guide de syntaxe des dates de Wikidot](https://community.wikidot.com/howto:date-how-long-ago) : `%e %b %Y, %H:%M %Z|agohover` et `%O`.
- Les guillemets doubles sont interdits dans le champ de format, car ils invalideraient la syntaxe de l'attribut Wikidot généré.
- Le moteur de rendu des dates de Wikidot n'affiche pas les dates antérieures à 1970. Le code est tout de même généré, mais l'aperçu reste vide et un avertissement apparaît.
- L'aperçu charge des fichiers JavaScript et CSS externes de Wikidot. Il est indisponible si ces ressources ne peuvent pas être chargées à cause d'un problème de réseau ou de serveur Wikidot.

Aucune compilation ni installation de paquet n'est nécessaire. Pour publier avec GitHub Pages, sélectionnez la racine (`/`) de la branche `main` comme source dans les paramètres Pages du dépôt.

### Origine et licence

Ce projet est une adaptation du [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago), publié par ErichSteinboeck en 2008 sous licence [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). Par rapport à l'original, la plage des années disponibles a été étendue à 1900–2100 et un bouton pour l'heure actuelle, un bouton de copie, un mode sombre et une validation des saisies ont été ajoutés. L'aperçu est actualisé lorsque la date ou le format change.

Le code de cette adaptation est distribué sous licence [CC BY-SA 4.0 International](LICENSE). Les fichiers JavaScript et CSS externes de Wikidot ne sont pas inclus dans ce dépôt et restent soumis à leurs propres conditions.

---

<a id="it"></a>
## Italiano

> **Informativa sull'uso dell'IA:** Il codice e la documentazione di questo progetto sono stati scritti e modificati con l'aiuto dell'intelligenza artificiale.

### Panoramica

Wikidot Date Wizard è uno strumento per browser che genera il codice Wikidot `[[date]]` dalla data e dall'ora selezionate. L'anteprima usa `OZONE.utils.formatOdate()` di Wikidot.

### Utilizzo

Apri `index.html` tramite un server web, seleziona data e ora, inserisci una stringa di formato e incolla il codice generato in una pagina Wikidot. Il timestamp Unix viene calcolato in base **al fuso orario locale del browser in cui si usa lo strumento**.

- Se il campo del formato è vuoto, il codice viene generato senza l'attributo `format`, per esempio `[[date 1234567890]]`.
- Premi un pulsante sotto il campo del formato per inserire il relativo codice nella posizione del cursore. Il pulsante `|agohover` attiva o disattiva il tempo relativo al passaggio del cursore.
- L'interfaccia supporta coreano, inglese, giapponese, cinese semplificato, danese, tedesco, spagnolo, francese, italiano, polacco, russo e serbo. Inizialmente usa la lingua del browser; le modifiche effettuate nel selettore della lingua vengono salvate.
- Le unità del tempo relativo e i testi mostrati al passaggio del cursore usano le funzioni di traduzione di Wikidot. Gli altri formati di data e la gestione del singolare e del plurale seguono il renderer di Wikidot.
- La stringa di formato viene passata direttamente al renderer di Wikidot. Esempi dalla [guida alla sintassi delle date di Wikidot](https://community.wikidot.com/howto:date-how-long-ago): `%e %b %Y, %H:%M %Z|agohover` e `%O`.
- Non è possibile usare le virgolette doppie nel campo del formato: renderebbero non valida la sintassi dell'attributo Wikidot generato.
- Il renderer delle date di Wikidot non mostra date precedenti al 1970. Il codice viene comunque generato, ma l'anteprima resta vuota e compare un avviso.
- L'anteprima carica JavaScript e CSS esterni da Wikidot. Non funziona se queste risorse non sono disponibili a causa di problemi di rete o del server Wikidot.

Non servono compilazione né installazione di pacchetti. Per pubblicare con GitHub Pages, seleziona la radice (`/`) del ramo `main` come origine nelle impostazioni Pages del repository.

### Origine e licenza

Questo progetto è un adattamento del [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago), pubblicato da ErichSteinboeck nel 2008 con licenza [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). Rispetto all'originale, amplia l'intervallo degli anni selezionabili a 1900–2100 e aggiunge un pulsante per l'ora attuale, un pulsante per copiare, la modalità scura e la convalida dei dati inseriti. L'anteprima viene aggiornata quando cambiano la data o il formato.

Il codice di questo adattamento è distribuito con licenza [CC BY-SA 4.0 International](LICENSE). I file JavaScript e CSS esterni di Wikidot non sono inclusi in questo repository e restano soggetti alle rispettive condizioni.

---

<a id="pl"></a>
## Polski

> **Informacja o użyciu AI:** Kod i dokumentacja tego projektu zostały napisane i zmienione z pomocą sztucznej inteligencji.

### Opis

Wikidot Date Wizard to narzędzie przeglądarkowe generujące kod Wikidot `[[date]]` dla wybranej daty i godziny. Podgląd korzysta z funkcji Wikidot `OZONE.utils.formatOdate()`.

### Użycie

Otwórz `index.html` przez serwer WWW, wybierz datę i godzinę, wpisz ciąg formatujący, a następnie wklej wygenerowany kod na stronie Wikidot. Znacznik czasu Unix jest obliczany według **lokalnej strefy czasowej przeglądarki, w której działa narzędzie**.

- Puste pole formatu powoduje wygenerowanie kodu bez atrybutu `format`, np. `[[date 1234567890]]`.
- Kliknij przycisk pod polem formatu, aby wstawić odpowiedni kod w miejscu kursora. Przycisk `|agohover` włącza lub wyłącza czas względny po najechaniu kursorem.
- Interfejs obsługuje język koreański, angielski, japoński, chiński uproszczony, duński, niemiecki, hiszpański, francuski, włoski, polski, rosyjski i serbski. Początkowo używany jest język przeglądarki; zmiana w menu języków zostaje zapisana.
- Jednostki czasu względnego i tekst po najechaniu kursorem są wyświetlane przez funkcje tłumaczeniowe Wikidot. Pozostałe formatowanie dat oraz obsługa liczby pojedynczej i mnogiej zależą od renderera Wikidot.
- Ciąg formatujący jest przekazywany bez zmian do renderera Wikidot. Przykłady z [opisu składni dat Wikidot](https://community.wikidot.com/howto:date-how-long-ago): `%e %b %Y, %H:%M %Z|agohover` i `%O`.
- W polu formatu nie można używać cudzysłowu podwójnego, ponieważ zepsułby składnię generowanego atrybutu Wikidot.
- Renderer dat Wikidot nie wyświetla dat sprzed 1970 roku. Kod nadal powstaje, ale podgląd pozostaje pusty i pojawia się ostrzeżenie.
- Podgląd ładuje zewnętrzne pliki JavaScript i CSS z Wikidot. Nie działa, jeśli problem z siecią lub serwerem Wikidot uniemożliwia ich załadowanie.

Nie trzeba kompilować projektu ani instalować pakietów. Aby opublikować go przez GitHub Pages, wybierz katalog główny (`/`) gałęzi `main` jako źródło w ustawieniach Pages repozytorium.

### Źródło i licencja

Projekt jest adaptacją [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago), opublikowanego przez ErichSteinboecka w 2008 roku na licencji [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). W porównaniu z oryginałem zakres wybieranych lat rozszerzono do 1900–2100 oraz dodano przycisk ustawiania bieżącego czasu, przycisk kopiowania, tryb ciemny i sprawdzanie danych wejściowych. Zmiana daty lub formatu odświeża podgląd.

Kod tej adaptacji jest dostępny na licencji [CC BY-SA 4.0 International](LICENSE). Zewnętrzne pliki JavaScript i CSS Wikidot nie należą do tego repozytorium i podlegają własnym warunkom użytkowania.

---

<a id="ru"></a>
## Русский

> **Уведомление об использовании ИИ:** Код и документация этого проекта были написаны и переработаны с помощью искусственного интеллекта.

### Описание

Wikidot Date Wizard — браузерный инструмент для создания кода Wikidot `[[date]]` по выбранным дате и времени. Для предварительного просмотра используется функция Wikidot `OZONE.utils.formatOdate()`.

### Использование

Откройте `index.html` через веб-сервер, выберите дату и время, введите строку формата и вставьте созданный код на страницу Wikidot. Временная метка Unix вычисляется с учётом **локального часового пояса браузера, в котором открыт инструмент**.

- Если оставить поле формата пустым, код будет создан без атрибута `format`, например `[[date 1234567890]]`.
- Нажмите кнопку под полем формата, чтобы вставить соответствующий код в месте курсора. Кнопка `|agohover` включает или отключает показ относительного времени при наведении.
- Интерфейс поддерживает корейский, английский, японский, упрощённый китайский, датский, немецкий, испанский, французский, итальянский, польский, русский и сербский языки. Сначала используется язык браузера; выбор другого языка в меню сохраняется.
- Единицы относительного времени и текст всплывающей подсказки выводятся с помощью функций перевода Wikidot. Остальное форматирование дат и обработка единственного и множественного числа зависят от рендерера Wikidot.
- Строка формата передаётся рендереру Wikidot без изменений. Примеры из [руководства по синтаксису дат Wikidot](https://community.wikidot.com/howto:date-how-long-ago): `%e %b %Y, %H:%M %Z|agohover` и `%O`.
- В поле формата нельзя использовать двойные кавычки: они нарушат синтаксис создаваемого атрибута Wikidot.
- Рендерер дат Wikidot не показывает даты до 1970 года. Код всё равно создаётся, но предварительный просмотр остаётся пустым и появляется предупреждение.
- Для предварительного просмотра загружаются внешние файлы JavaScript и CSS Wikidot. Если их загрузке мешают проблемы сети или сервера Wikidot, предварительный просмотр недоступен.

Сборка и установка пакетов не требуются. Для публикации через GitHub Pages выберите корневой каталог (`/`) ветки `main` в качестве источника в настройках Pages репозитория.

### Источник и лицензия

Проект создан на основе [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago), опубликованного ErichSteinboeck в 2008 году по лицензии [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). По сравнению с оригиналом диапазон выбираемых лет расширен до 1900–2100; добавлены кнопка установки текущего времени, кнопка копирования, тёмная тема и проверка ввода. При изменении даты или формата предварительный просмотр обновляется.

Код этой адаптации распространяется по лицензии [CC BY-SA 4.0 International](LICENSE). Внешние файлы JavaScript и CSS Wikidot не входят в этот репозиторий и регулируются собственными условиями использования.

---

<a id="sr"></a>
## Српски

> **Обавештење о употреби ВИ:** Код и документација овог пројекта написани су и измењени уз помоћ вештачке интелигенције.

### Преглед

Wikidot Date Wizard је алат за прегледач који генерише Wikidot код `[[date]]` на основу изабраног датума и времена. Преглед користи Wikidot функцију `OZONE.utils.formatOdate()`.

### Употреба

Отворите `index.html` преко веб-сервера, изаберите датум и време, унесите ниску формата и налепите генерисани код на Wikidot страницу. Unix временска ознака израчунава се према **локалној временској зони прегледача у којем је алат отворен**.

- Ако је поље формата празно, генерише се код без атрибута `format`, на пример `[[date 1234567890]]`.
- Притисните дугме испод поља формата да уметнете одговарајући код на место курсора. Дугме `|agohover` укључује или искључује приказ релативног времена при преласку показивачем.
- Интерфејс подржава корејски, енглески, јапански, поједностављени кинески, дански, немачки, шпански, француски, италијански, пољски, руски и српски. У почетку се користи језик прегледача; промена у менију за језик се чува.
- Јединице релативног времена и текст при преласку показивачем приказују се помоћу Wikidot функција за превод. Остало форматирање датума и обрада једнине и множине зависе од Wikidot рендерера.
- Ниска формата се без измена прослеђује Wikidot рендереру. Примери из [водича за синтаксу датума на Wikidot-у](https://community.wikidot.com/howto:date-how-long-ago): `%e %b %Y, %H:%M %Z|agohover` и `%O`.
- Двоструки наводници нису дозвољени у пољу формата, јер би нарушили синтаксу генерисаног Wikidot атрибута.
- Wikidot рендерер датума не приказује датуме пре 1970. године. Код се ипак генерише, али преглед остаје празан и приказује се упозорење.
- Преглед учитава спољне Wikidot JavaScript и CSS датотеке. Ако проблем са мрежом или Wikidot сервером спречи њихово учитавање, преглед није доступан.

Нису потребни изградња пројекта нити инсталирање пакета. За објављивање преко GitHub Pages, у подешавањима Pages репозиторијума изаберите корени директоријум (`/`) гране `main` као извор.

### Порекло и лиценца

Овај пројекат је адаптација [Wikidot Community Date Wizard-а](https://community.wikidot.com/howto:date-how-long-ago), који је ErichSteinboeck објавио 2008. године под лиценцом [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). У односу на оригинал, распон година је проширен на 1900–2100, а додати су дугме за текуће време, дугме за копирање, тамни режим и провера уноса. Преглед се освежава када се датум или формат промене.

Код ове адаптације објављен је под лиценцом [CC BY-SA 4.0 International](LICENSE). Спољне Wikidot JavaScript и CSS датотеке нису укључене у овај репозиторијум и подлежу сопственим условима коришћења.