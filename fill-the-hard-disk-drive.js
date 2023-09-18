/* 
Computer problem series #1: Fill the Hard Disk Drive

Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
*/

const save = (sizes, hd) => {
    let res = 0;
    sizes.reduce((acc,c)=>{
        if((acc+= c) <= hd){
            res += 1;
        }
        return acc;
    }, 0)
    return res
}