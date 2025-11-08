import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useLogger(sessionId: string, visitorId: string) {
  const logActivity = async (activityType: string, details: any) => {
    await supabase.from('client_activity_logs').insert({
      session_id: sessionId,
      visitor_id: visitorId,
      activity_type: activityType,
      ...details,
      ip_address: await fetch('/api/get-ip').then(r => r.text()), // API pour récupérer l'IP
      timestamp: new Date().toISOString(),
    });
  };

  useEffect(() => {
    // Log page view au montage
    logActivity('PAGE_VIEW', { page_name: window.location.pathname });
    
    // Log clics sur des éléments
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      logActivity('CLICK', {
        element_id: target.id,
        element_type: target.tagName,
        page_name: window.location.pathname,
      });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [sessionId, visitorId]);

  return { logActivity };
}