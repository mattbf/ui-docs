import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { Text } from '@/components/ui/Text';
import SimulateErrorButton from './SimulateErrorButton';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

const SentryPage = () => (
  <ComponentDocsPageTemplate title="Sentry" path="/sentry">
    <div className="p-12 flex flex-col items-center justify-center gap-4 w-full">
      <Text variant="body" size="lg" className="text-text-secondary">
        Make sure that <br />
        <pre className="text-rose-600 font-mono bg-gray-900 p-4 rounded-md text-sm border border-stroke-primary">
          <code>
            NEXT_PUBLIC_SENTRY_AUTH_TOKEN <br />
            NEXT_PUBLIC_SENTRY_DSN <br />
            NEXT_PUBLIC_SENTRY_PROJECT <br />
            NEXT_PUBLIC_SENTRY_ORG <br />
          </code>
        </pre>
        are all set in your <strong>`env.development`</strong> file locally
      </Text>
      <div className="p-2">
        <SimulateErrorButton />
      </div>
      <div className="p-2">
        <Link
          href={`https://vesto-financial.sentry.io/issues/?project=4506752364838912&statsPeriod=90d`}
          target="_blank"
          className="text-lavender-700 flex flex-row gap-1 items-center"
        >
          Go to Sentry Dashboard
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default SentryPage;
