export class ResponseDTO<T> {
    code: number;
    message: string;
    success: boolean;
    data: T;
}

export class DeptDTO {
    deptno: number;
    dname: string;
    loc: string;
}

export class EmpDTO {
    empno: number;
    ename: string;
    mgr: number;
    sal: number;
    comm: number;
    hiredate: Date;
    dept: DeptDTO;
}

export const dummyDeptList = [
    { deptno: 10, dname: 'Test 1', loc: '' },
    { deptno: 20, dname: 'Test 2', loc: '' },
    { deptno: 30, dname: 'Test 3', loc: '' },
];

export const dummyEmpList = [
    { empno: 10011, ename: 'Ali Yılmaz', mgr: 1, sal: 100, comm: 10, hiredate: new Date(), dept: dummyDeptList[0]  },
    { empno: 10024, ename: 'Ayşe Demir', mgr: 1, sal: 110, comm: 15, hiredate: new Date(), dept: dummyDeptList[1] },
    { empno: 10035, ename: 'Mehmet Öztürk', mgr: 1, sal: 120, comm: 20, hiredate: new Date(), dept: dummyDeptList[1] },
];