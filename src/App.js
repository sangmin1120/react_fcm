import { useEffect } from 'react';
import { requestPermission } from './firebase.ts' // 경로는 맞게 조정하세요

function App() {
  useEffect(() => {
    requestPermission();
  }, []);

  return <div>앱 실행 중</div>;
}

export default App;
