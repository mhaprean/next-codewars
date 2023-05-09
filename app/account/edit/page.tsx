import { NextResponse } from 'next/server';
import getCurrentUser from '../../actions/getCurrentUser';
import EditAccountForm from '../../components/account/EditAccountForm';

export default async function EditAccountPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  return (
    <div>
      <EditAccountForm user={currentUser} />
    </div>
  );
}
