import React from "react";
import { X, Check, Copy, Server, ArrowRight, FolderArchive, UploadCloud } from "lucide-react";

interface HostingerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingerGuideModal: React.FC<HostingerGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const htaccessCode = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`;

  const copyHtaccess = () => {
    navigator.clipboard.writeText(htaccessCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm border border-[#DEB778]/40 bg-[#111114] text-[#F5F1E9] p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#DEB778]/20">
          <div className="flex items-center gap-2.5">
            <Server className="w-5 h-5 text-[#D8AD68]" />
            <h3 className="font-serif text-2xl font-medium">Hostinger Deployment Guide</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-[#918B83] hover:text-[#F3D7A0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#C4BFB6] leading-relaxed">
          This website is built with <strong>React + Vite + TypeScript</strong>, generating a high-performance static distribution in the <code className="text-[#F3D7A0] bg-[#18181C] px-1.5 py-0.5 rounded">dist/</code> directory, completely optimized for Hostinger Shared or Cloud Web Hosting.
        </p>

        {/* 3 Step Deployment Flow */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-4 rounded-sm border border-[#DEB778]/20 bg-[#18181C] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D8AD68]">
                Step 1: Build Production Assets
              </span>
              <span className="text-[11px] font-mono text-[#918B83]">Terminal</span>
            </div>
            <p className="text-xs text-[#C4BFB6]">Run the standard build command in your terminal:</p>
            <div className="p-2.5 bg-[#09090B] border border-[#27272A] rounded font-mono text-xs text-[#F3D7A0]">
              npm run build
            </div>
            <p className="text-[11px] text-[#918B83]">
              This bundles all assets, images, and HTML into the <code className="text-[#F5F1E9]">dist</code> folder.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-sm border border-[#DEB778]/20 bg-[#18181C] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D8AD68]">
                Step 2: Upload Files to Hostinger
              </span>
              <span className="text-[11px] font-mono text-[#918B83]">hPanel File Manager</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-xs text-[#C4BFB6]">
              <li>Log in to your <strong>Hostinger hPanel</strong>.</li>
              <li>Navigate to <strong>Websites → Manage → File Manager</strong>.</li>
              <li>Open the <code className="text-[#F3D7A0]">public_html</code> folder of your domain.</li>
              <li>Upload all files and folders directly from inside your local <code className="text-[#F3D7A0]">dist/</code> directory into <code className="text-[#F3D7A0]">public_html/</code>.</li>
            </ol>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-sm border border-[#DEB778]/20 bg-[#18181C] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D8AD68]">
                Step 3: Apache .htaccess for Smooth Routing
              </span>
              <button
                onClick={copyHtaccess}
                className="inline-flex items-center gap-1 text-[11px] text-[#D8AD68] hover:text-[#F3D7A0]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy .htaccess"}</span>
              </button>
            </div>
            <p className="text-xs text-[#C4BFB6]">
              A pre-configured <code className="text-[#F3D7A0]">.htaccess</code> file is included in your project under <code className="text-[#F3D7A0]">public/.htaccess</code>. Ensure it exists in your <code className="text-[#F3D7A0]">public_html/</code> directory:
            </p>
            <pre className="p-2.5 bg-[#09090B] border border-[#27272A] rounded font-mono text-[11px] text-[#C4BFB6] overflow-x-auto">
              {htaccessCode}
            </pre>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#09090B] bg-gradient-to-r from-[#A97A3C] via-[#F3D7A0] to-[#C99A53] hover:brightness-105 transition-all"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
