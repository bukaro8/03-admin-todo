import prisma from '@/lib/prima';
import { NextResponse } from 'next/server';
//?return all ToDos
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const take = parseInt(searchParams.get('take') ?? '10');
	const skip = parseInt(searchParams.get('skip') ?? '0');

	const todos = await prisma.todo.findMany({
		take: take,
		skip: skip,
	});
	return NextResponse.json(todos);
}
