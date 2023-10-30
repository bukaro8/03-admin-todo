import prisma from '@/lib/prima';
import { NextResponse } from 'next/server';
//?return all ToDos
interface Segment {
	params: { id: string };
}
export async function GET(request: Request, segment: Segment) {
	// const { pathname } = new URL(request.url);
	// const id = pathname.split('/')[3];
	const { id } = segment.params;

	const todos = await prisma.todo.findUnique({
		where: {
			id,
		},
	});
	if (todos) {
		return NextResponse.json(todos);
	}
	return NextResponse.json({ error: 'ID not found' }, { status: 404 });
}
