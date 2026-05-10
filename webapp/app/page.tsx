import Image from "next/image";
import { useState } from "react";

import SandboxProjectView from './components/SandboxProjectView';

export default function Home() {

  return SelectContent();
}

export function SelectContent(){
  const [activeView] = useState<'sandbox' | 'database' | 'experten'>('sandbox');

    switch (activeView) {
      case 'sandbox':
        return <SandboxProjectView />;
      default:
        return <SandboxProjectView />;
    }
}
