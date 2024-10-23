import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  Magnification,
  PdfViewerComponent,
  TextSearch,
  ThumbnailView,
  Toolbar,
  Inject,
  Navigation,
  LinkAnnotation,
  BookmarkView
} from '@syncfusion/ej2-react-pdfviewer';

const App = () => {
  return (
    <PdfViewerComponent
      id='container'
      documentPath='https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
      resourceUrl='https://cdn.syncfusion.com/ej2/27.1.50/dist/ej2-pdfviewer-lib'
      style={{ height: window.innerHeight }}
      enableNavigation={true}
      enableDownload={false}
      enablePrint={false}
      enableHyperlink={true}
      enableBookmark={true}
      hyperlinkOpenState='NewTab'
      tileRenderingSettings={{
        enableTileRendering: false,
        x: 0,
        y: 0
      }}
    >
      <Inject
        services={[
          Toolbar,
          Magnification,
          ThumbnailView,
          TextSearch,
          Navigation,
          LinkAnnotation,
          BookmarkView
        ]}
      />
    </PdfViewerComponent>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
